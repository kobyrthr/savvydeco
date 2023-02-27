import React from 'react'

import { Card, CardFooter,Button,Divider,ButtonGroup,Heading,CardBody, Image, Text, Stack } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  // const { name, image, price, rating, numReviews } = product;

  return (
    <Card maxW='sm'>
          <CardBody>
            <Image
              src={product.image} boxSize='sm'objectFit={'contain'}
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md' maxW="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{product.title}</Heading>
              <Text maxW="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                {product.description}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                ${product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
  );
};

export default ProductCard;
