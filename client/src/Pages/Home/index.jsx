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
          images(first: 1) {
            edges {
              node {
                transformedSrc(maxWidth: 400)
              }
            }
          }
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
    
   
    
    </>
  )
}

export default Home