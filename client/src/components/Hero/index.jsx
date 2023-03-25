import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import heroImage from '../../images/couch_img_1.png';

export const Hero = () => {
  return (
    <Box as="section" minH="140px" position="relative" backgroundColor={'white'}>
      <Flex py="32" position="relative" zIndex={1} >
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
          color="#53775E"
          textAlign={'center'}
        >
          <Box maxW="xl">
            <Heading as="h1" size="2xl" fontWeight="extrabold">
            Your dream home decor
at even dreamier prices            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mt="4"
            >
             The pain itself is love, the main storage system. It is not until the hunger of any one can pull the boxes.
            </Text>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              mt="10"
              spacing="4"
              justifyContent={'center'}
            >
              <Button
                as="a"
                href="#"
                backgroundColor={"#53775E"}
                px="8"
                borderRadius={"4px"}
                size="lg"
                fontSize="md"
                fontWeight="bold"
                color={'white'}
              >
Shop Now              </Button>
            </Stack>
          </Box>
        </Box>
      </Flex>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
        borderRadius={'60px 60px 0 0'}
      >
        <Box position="relative" w="full" h="full">
          <Img
            src={heroImage}
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero