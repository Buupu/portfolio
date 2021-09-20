import {
  Flex,
  Heading,
  Icon,
  Text,
  Link,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  githubLink,
  demoLink,
  technologies,
}: {
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  technologies: string[];
}) {
  return (
    <Flex
      w="full"
      h="full"
      p={6}
      border="1px"
      borderColor="lightGray"
      borderRadius="10px"
      flexDirection="column"
      cursor="pointer"
      minH="260px"
    >
      <Flex justify="space-between" mb={4}>
        <Heading as="h3" fontSize="lg">
          {title}
        </Heading>
        <Icon
          as={FaGithub}
          h="24px"
          w="24px"
          color="whiteAlpha.600"
          _hover={{ color: "primary" }}
          transition="0.3s ease-out"
        />
      </Flex>
      <Flex flexDirection="column" flex={1} w="100%" textAlign="right">
        <Text flex={1} fontSize={["12px", "14px"]} textAlign="left" mb={2}>
          {description}
        </Text>
        <Link
          fontSize={["12px", "14px"]}
          fontWeight="bold"
          textAlign="right"
          w="100%"
        >
          View Demo {">"}
        </Link>
      </Flex>
      <HStack justify="flex-end" mt={3}>
        <Badge
          color="primary"
          textTransform="none"
          variant="outline"
          boxShadow="none"
          border="1px"
          borderRadius="5px"
          fontWeight="normal"
        >
          Node
        </Badge>
        <Badge
          color="primary"
          textTransform="none"
          variant="outline"
          boxShadow="none"
          border="1px"
          borderRadius="5px"
          fontWeight="normal"
        >
          Node
        </Badge>
        <Badge
          color="primary"
          textTransform="none"
          variant="outline"
          boxShadow="none"
          border="1px"
          borderRadius="5px"
          fontWeight="normal"
        >
          Node
        </Badge>
        <Badge
          color="primary"
          textTransform="none"
          variant="outline"
          boxShadow="none"
          border="1px"
          borderRadius="5px"
          fontWeight="normal"
        >
          Node
        </Badge>
      </HStack>
    </Flex>
  );
}
