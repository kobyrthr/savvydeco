import {React,useEffect} from 'react'
import Navbar from '../../components/Navbar'

const Home = () => {

  useEffect(
    ()=>{console.log('Hello')},[]
  )
  return (
    <>
    <Navbar></Navbar>
    <div>Home</div>
    </>
  )
}

export default Home