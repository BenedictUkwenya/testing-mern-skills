import { Input, Button, Container, useColorModeValue, VStack, Heading, Box, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../Store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name : "",
    price: "",
    image: "",
  });
  const toast = useToast()
  const {createProduct} = useProductStore()
  const handleAdd =async () => {
    const {success,message} = await createProduct(newProduct)
    console.log("Success", success)
    console.log("Message:", message)
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true
      })
    }
    else{
      toast({
        title: "Success",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true
      });
    }
    setNewProduct({name: "", price:"", image:""})
  };
  return (
    <div><Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={'h1'} size={"2x1"} textAlign={"center"} mb={8}>
          Create new Product
        </Heading>
        <Box
        w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"1g"} shadow={"md"}        >
          <VStack spacing={4}>
          <Input placeholder="Product Name"
          name="name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
          />
          <Input placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
          />
          <Input placeholder="Image URl"
          name="image"
          value={newProduct.image}
          onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
          />
        <Button colorScheme='blue' onClick={handleAdd} w='full'>

        </Button>
          </VStack>
        </Box>
      </VStack>
      </Container></div>
  )
}

export default CreatePage