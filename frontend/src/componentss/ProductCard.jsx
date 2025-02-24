import {useDisclosure,  Box, Heading, HStack, IconButton, Text, useColorModeValue,Image, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, ModalFooter, Button, Input } from '@chakra-ui/react'
import {EditIcon, DeleteIcon} from "@chakra-ui/icons"
import React from 'react'
import { useState } from 'react'
import { useProductStore } from '../Store/product'
const ProductCard = ({product}) => {
    const [UpdatedProduct, setUpdatedProduct] = useState(product)
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800")
    const {deleteProduct, updateProduct} = useProductStore()
    const toast = useToast()
    const {isOpen, onOpen, onClose}= useDisclosure()
    const handleDelete =async (pid) =>{
      const {success, message} =  await deleteProduct(pid)
      if(!success){
        toast({
            title: "Error",
            description: message,
            status: "error",
            duration: 3000,
            isClosable: true,
        })
      }
      else{
        toast({
            title: "Success",
            description: message,
            status: "success",
            duration: 3000,
            isClosable: true,
        })
      }
     // const {updateProduct} = useProductStore()


    }
    const handleUpdateProduct = async (pid, UpdatedProduct) =>{
       const {success, message} = await updateProduct(pid, UpdatedProduct);
        onClose()
        if(!success){
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
        else{
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        }
      }
    return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{transform: "translate(-5px)", shadow:"x1"}}
    bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover'/>
        <Box
        p={4}
        
        >
            <Heading
            as='h3'
            size='md'
            mb={2}
            >
                {product.name}
            </Heading>
            <Text fontWeight='bold' fontSize={"x1"} color={textColor} mb={4}>
            ₦{product.price}
            </Text>
            <HStack
            spacing={2}
            >
                <IconButton icon={<EditIcon/>}
             colorScheme='blue' onClick={onOpen}/>
                <IconButton icon={<DeleteIcon/>} onClick={() => handleDelete(product._id)} colorScheme='blue' />
            </HStack>

        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Update Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4}>
                        <Input placeholder='Product Name' name='name' value={UpdatedProduct.name}
                        onChange={(e) => setUpdatedProduct({...UpdatedProduct, name: e.target.value})}/>
                        <Input placeholder='Price' name='price' type='number' value={UpdatedProduct.price}
                        onChange={(e) => setUpdatedProduct({...UpdatedProduct, price: e.target.value})}/>
                        <Input placeholder='Img URL' name='Image' value={UpdatedProduct.image}
                        onChange={(e) => setUpdatedProduct({...UpdatedProduct, image: e.target.value})}/>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={()=>handleUpdateProduct(product._id, UpdatedProduct)}>
                        Update
                    </ Button>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </ Button>                    
                </ModalFooter>
            </ModalContent>

        </Modal>
    </Box>
  )
}

export default ProductCard