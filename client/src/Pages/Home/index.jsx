import { Box, Flex, Text, Heading,Button, Image, Grid, GridItem } from '@chakra-ui/react'
import {React,useEffect,useState} from 'react'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
import ProductGrid from '../../components/ProductGrid'
import { getAllProducts } from '../../api/products.service';
import heroImage from '../../images/Heroimage.png';
import axios from 'axios'
import Hero from '../../components/Hero'




const Home = () => {

  const [products,setProducts] = useState([])
  // const fetchProducts = 
  
  // async (err)=>{
  //   if (err){
  //     console.log("AAXIOS ERROR: ",err)
  //   }

  //   else{
  //     await axios.get("http://localhost:4000/api")
  //     .then((res)=>{
  //       console.log(res.data)
  //     })
  //   }
  // }
  // useEffect(()=>fetchProducts(),[])

   useEffect(() => { async function fetchMyAPI (){
      
        try {
          const allProducts = await axios.get('/api');
          console.log(allProducts)
          setProducts(allProducts.data.products)
        } catch (error) {
          console.log(error)
        }  
    }
    fetchMyAPI()
  },[])

  useEffect(()=>{console.log("here are products: ",products)},[products])

  return (
    <>
    {/* NAVBAR */}

    <Navbar ></Navbar>

    {/* HERO */}
    <Hero></Hero>

    {/* PRODUCT GRID */}
    <ProductGrid></ProductGrid>
    {/* <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gap={6}
      px={{ base: "4", md: "6", lg: "8" }}
      bg={'Savvybrown.0'}>
      {products.map((product,index)=>{
        return <GridItem>
                <ProductCard product={product} key={index}></ProductCard>
              </GridItem>
      })}
    </Grid> */}
    {/* PRODUCT GRID */}
    
    </>
  )
}

export default Home