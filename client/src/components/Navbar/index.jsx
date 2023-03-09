import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Link
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from '../../components/Logo'
import { Cart } from "../../components/Cart";

export const NavBar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box
      as="section"
    >
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container
          py={{
            base: '4',
            lg: '5',
          }}
          maxW={'100vw'}
        >
      <Cart></Cart>
          <HStack spacing="10" justify="space-between">
            <Link href='/'>
            <Logo />
            </Link>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  <Button variant='link' spacing='8'>
                    <Link href='/new_product'>New Product Page</Link>
                  </Button>
                  <Button variant='link' spacing='8'>
                    <Link href='/product_id'> Product ID Page</Link>
                  </Button>
                </ButtonGroup>
                <HStack spacing="3">
                  <Button variant="primary">Cart</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default NavBar;