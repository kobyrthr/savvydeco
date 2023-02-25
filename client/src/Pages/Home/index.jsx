import { Box, Flex, Text, Heading,Button, Image, Grid, GridItem } from '@chakra-ui/react'
import {React,useEffect,useState} from 'react'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
const Home = () => {

  const [products,setProducts] = useState([])

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
    <Navbar ></Navbar>

    {/* HERO SECTION */}
    <Flex bg={'Savvybrown.0'}>
      <Box  w={{ base: "100%", md: "50%" }}  p={16}>
        <Heading as="h1" size="xl" mb="4">
          Welcome to our website
        </Heading>
        <Text fontSize="xl" mb="6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Button bg="black" color='white' size="lg">
          Learn more
        </Button>
      </Box>
      <Box w={{ base: "100%", md: "50%" }} p={16}>
        <Image
          src='images/Hero image.png' 
          boxSize='m'
          alt="hero image"
          objectFit="cover"
        
        />
      </Box>
    </Flex>

    {/* PRODUCT GRID */}
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gap={6}
      px={{ base: "4", md: "6", lg: "8" }}
      bg={'Savvybrown.0'}>
      {products.map((product,index)=>{
        return <GridItem>
                <ProductCard product={product} key={index}></ProductCard>
              </GridItem>
      })}
    </Grid>
    </>
  )
}

export default Home