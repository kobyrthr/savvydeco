import React from 'react'
import { Box, Icon, Flex } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <div>
      <Flex>
        <img src="images/favicon.png" alt="" />
        <li>Home</li>
        <li>Sign in</li>
      </Flex>
    </div>
  )
}
