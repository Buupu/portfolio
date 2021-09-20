import {
  Box,
  Heading,
  Link,
  Text,
  Flex,
  Divider,
  Icon
} from '@chakra-ui/react';
import { FaYoutube, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <Box textAlign="center">
      <Heading as="h2" fontSize="x-large" mb={20}>
        Want to get in touch?
      </Heading>
      <Text fontSize="14px">
        Feel free to drop me an email -{' '}
        <Link color="primary">sammyfattah@gmail.com</Link>
      </Text>
      <Divider
        w={['120px', '280px']}
        my={20}
        mx="auto"
        orientation="horizontal"
      />
      <Flex w="200px" mx="auto" justify="space-between" mb={20}>
        <Icon
          as={FaYoutube}
          cursor="pointer"
          _hover={{ color: 'primary' }}
          transition="0.3s ease-out"
          h="25px"
          w="25px"
        />
        <Icon
          as={FaLinkedin}
          cursor="pointer"
          _hover={{ color: 'primary' }}
          transition="0.3s ease-out"
          h="25px"
          w="25px"
        />
        <Icon
          as={FaGithubSquare}
          cursor="pointer"
          _hover={{ color: 'primary' }}
          transition="0.3s ease-out"
          h="25px"
          w="25px"
        />
        <Icon
          as={RiInstagramFill}
          cursor="pointer"
          _hover={{ color: 'primary' }}
          transition="0.3s ease-out"
          h="25px"
          w="25px"
        />
      </Flex>
    </Box>
  );
}
