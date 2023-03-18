import {React} from 'react'
import Navbar from '../../components/Navbar'
import ProductGrid from '../../components/ProductGrid'
import Hero from '../../components/Hero'
import { useQuery,gql } from '@apollo/client';

const QUERY = gql`
  
  
query {
products(first: 3) {
  edges {
    cursor
    node {
      id
      title
      description
      handle
      variants(first: 3) {
        edges {
          cursor
          node {
            id
            title
            quantityAvailable
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
}
}
`;
const Home = () => {

    const { loading, error, data } = useQuery(QUERY,{});
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    const { products } = data;


  return (
    <>
    {/* NAVBAR */}
    <Navbar ></Navbar>

    {/* HERO */}
    <Hero></Hero>
    {/* PRODUCT GRID */}
    <ProductGrid products={products}></ProductGrid>
    
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