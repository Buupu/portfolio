import {
  Box,
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
    <Link
      href={demoLink}
      target="_blank"
      _hover={{ textDecoration: "none" }}
      _active={{ outline: "none" }}
    >
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
        _hover={{ borderColor: "primary" }}
        transition="0.3s ease-out"
      >
        <Flex justify="space-between" mb={4}>
          <Heading as="h3" fontSize="lg" textAlign="left">
            {title}
          </Heading>
          <Link href={githubLink} target="_blank">
            <Icon
              as={FaGithub}
              h="24px"
              w="24px"
              color="whiteAlpha.600"
              _hover={{ color: "primary" }}
              transition="0.3s ease-out"
            />
          </Link>
        </Flex>
        <Flex flexDirection="column" flex={1} w="100%" textAlign="right">
          <Text flex={1} fontSize={["12px", "14px"]} textAlign="left" mb={2}>
            {description}
          </Text>
          <Text
            fontSize={["12px", "14px"]}
            fontWeight="bold"
            textAlign="right"
            w="100%"
          >
            View Demo {">"}
          </Text>
        </Flex>
        <HStack justify="flex-end" mt={3} maxW="100%" flexWrap="wrap">
          {technologies.map((tech) => (
            <Box pt={1} key={`project-card-badge-${title}-${tech}`}>
              <Badge
                color="primary"
                textTransform="none"
                variant="outline"
                boxShadow="none"
                border="1px"
                borderRadius="5px"
                fontWeight="normal"
              >
                {tech}
              </Badge>
            </Box>
          ))}
        </HStack>
      </Flex>
    </Link>
  );
}
