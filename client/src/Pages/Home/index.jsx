import {React,useEffect} from 'react'

const Home = () => {

  useEffect(
    ()=>{console.log('Hello')},[]
  )
  return (
    <div color='yellow'>Home</div>
  )
}

export default Home