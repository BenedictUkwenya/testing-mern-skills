import { Button, Container, HStack, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Text } from '@chakra-ui/react'
import {PlusSquareIcon} from "@chakra-ui/icons"
import {IoMoon} from "react-icons/io5"
import {LuSun} from "react-icons/lu"
import { useProductStore } from '../Store/product'
const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
   const {products} = useProductStore()
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex 
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        FlexDir={
        {    base: "column",
            sm: "row"
        }}
        >
        <Text 
        fontSize={{base: "22", sm: "28"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, red.400,pink.400,orange.400)"}
        bgClip={"text"}
        ><Link to={"/"}>Product Store</Link></Text>
        <HStack spacing={2}
        alignItems={"center"}
        >
            <Link to={'/create'}>
            <Button>
                <PlusSquareIcon fontSize={20}/>
            </Button></Link>
            <Button onClick={toggleColorMode}>
                {colorMode ==="light"? <IoMoon /> : <LuSun />}
            </Button>
        </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar