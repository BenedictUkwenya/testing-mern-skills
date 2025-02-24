import { Text, Button, Container, useColorModeValue, VStack, Heading, Box, useToast, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../Store/product';
import ProductCard from '../componentss/ProductCard';
const HomePage = () => {
  const {fetchProducts, products} =  useProductStore()
  useEffect(()=>{
    fetchProducts()
  },[fetchProducts]);
  console.log(products)
  return (
    <Container
    maxW="container.x1" py={12}
    >
      <VStack spacing={8}>
        <Text
        fontSize={"30"}
        fontweight={"bold"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
        textAlign={"center"}
        >
          Current Products
        </Text>
        <SimpleGrid
        columns={{
          base:1,
          md: 2,
          lg:3
        }}
        spacing={10}
        w={"full"}>
          
        {products.map((product) =>(
          <ProductCard key={product._id} product={product}/>
        ))}
        </SimpleGrid>
      {products.length === 0 && (
        <Text
        fontSize='x1'
        textAlign={"center"}
        fontWeight="bold"
        color='grey.500'
        >
          No products found {" "}
          <Link to={"/create"}><Text
            as='span'
            color='blue.500' _hover={{textDecoration: "underline"}}
          >
            Create a Product
            </Text>
            </Link>
        </Text>
      )}
      </VStack>
    </Container>
  )
}

export default HomePage