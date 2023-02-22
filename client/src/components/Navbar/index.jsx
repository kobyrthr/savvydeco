import React from 'react'
import { Box, Icon, Flex, List, ListItem,UnorderedList } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <>
      <Flex justifyContent='space-between'w='100%'>
          <img src="images/favicon.png" alt=""/>
        <UnorderedList display={'flex'} styleType={'none'} justifyItems={'space-around'}>  
          <ListItem>Home</ListItem>
          <ListItem>Log in with Google</ListItem>
        </UnorderedList>    
      </Flex>
    </>
  )
}
