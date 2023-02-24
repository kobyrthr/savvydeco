import { chakra,Container,Box, Flex, Text, Heading,Button, Image, Grid, GridItem, Card, CardHeader, CardBody, CardFooter, Stack, Divider,ButtonGroup } from '@chakra-ui/react'
import {React,useEffect,useState} from 'react'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
const Home = () => {

  const [products,setProducts] = useState([])
    // {name:'Aricle Couch', seller:'Karina Garces', }
    // { name, image, price, rating, numReviews }

  useEffect(()=>{
    const getData = async ()=>{
      const data = await fetch('https://fakestoreapi.com/products/')
      setProducts(await data.json())
    }
    getData()
  },[])

  useEffect(()=>{console.log(products)},[products])
  return (
    <>
    {/* NAVBAR */}
    <Navbar></Navbar>

    {/* HERO SECTION */}
    {/* <Flex bg={'#FFF8EC'} h='500px' color='black' w="100vw">
      <Box>
       <Heading>High-end decor at accessible prices</Heading>
       <Text>The pain itself is love, the main storage system, It is not until the hunger of any one can pull the boxes.</Text> 
       <Button bg='black' color='white'>Shop Now</Button>
      </Box>
      <Box>
        <Image src='images/Hero image.png' boxSize='sm'></Image>
      </Box>
    </Flex> */}

    <Flex>
      <Box w={{ base: "100%", md: "50%" }}>
        <Heading as="h1" size="xl" mb="4">
          Welcome to our website
        </Heading>
        <Text fontSize="xl" mb="6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Button colorScheme="blue" size="lg">
          Learn more
        </Button>
      </Box>
      <Box w={{ base: "100%", md: "50%" }}>
        <Image
          src='images/Hero image.png' boxSize='sm'
          alt="hero image"
          objectFit="cover"
          h="100%"
          w="100%"
        />
      </Box>
    </Flex>

    {/* PRODUCT GRID */}

    {/* PRODUCT API CALL
    
    category: "men's clothing"
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id: 1
image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price: 109.95
rating: {rate: 3.9, count: 120}
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    
     */}

    <Grid display={'flex'} justifyContent={'space-evenly'}>
      {products.map((product,index)=>{
        return <ProductCard key={index} product={product} ></ProductCard>
      })}

    </Grid>



    </>
  )
}

export default Home