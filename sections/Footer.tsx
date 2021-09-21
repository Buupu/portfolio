import {
  Box,
  Heading,
  Link,
  Text,
  Flex,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaYoutube, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <Box textAlign="center">
      <Heading as="h2" fontSize="x-large" mb={20}>
        Want to get in touch?
      </Heading>
      <Text fontSize="14px">
        Feel free to drop me an email -{" "}
        <Link color="primary" href="mailto:sammyfattah@gmail.com">
          sammyfattah@gmail.com
        </Link>
      </Text>
      <Divider
        w={["120px", "280px"]}
        my={20}
        mx="auto"
        orientation="horizontal"
      />
      <Flex w="200px" mx="auto" justify="space-between" mb={20}>
        <Link
          href="https://www.youtube.com/channel/UCar65QXHC-qXWUTn2nzLtwg"
          target="_blank"
        >
          <Icon
            as={FaYoutube}
            cursor="pointer"
            _hover={{ color: "primary" }}
            transition="0.3s ease-out"
            h="25px"
            w="25px"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sammy-fattah-98a77015a/"
          target="_blank"
        >
          <Icon
            as={FaLinkedin}
            cursor="pointer"
            _hover={{ color: "primary" }}
            transition="0.3s ease-out"
            h="25px"
            w="25px"
          />
        </Link>
        <Link href="https://github.com/Buupu" target="_blank">
          <Icon
            as={FaGithubSquare}
            cursor="pointer"
            _hover={{ color: "primary" }}
            transition="0.3s ease-out"
            h="25px"
            w="25px"
          />
        </Link>
        <Link href="https://www.instagram.com/samfatz/" target="_blank">
          <Icon
            as={RiInstagramFill}
            cursor="pointer"
            _hover={{ color: "primary" }}
            transition="0.3s ease-out"
            h="25px"
            w="25px"
          />
        </Link>
      </Flex>
    </Box>
  );
}
