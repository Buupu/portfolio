import { Flex, Heading } from "@chakra-ui/react";
import ScrollIndicator from "./ScrollIndicator";

export default function Intro() {
  return (
    <Flex flexDirection="column" w="full" height="85vh" justifyContent="center">
      <Heading
        as="h3"
        color="primary"
        fontSize={["12px", "12px", "14px"]}
        letterSpacing="wide"
        fontWeight="bold"
      >
        FRONT-END DEVELOPER
      </Heading>
      <Heading
        as="h1"
        fontSize={["42px", "54px", "74px"]}
        letterSpacing="wide"
        mb={2}
      >
        Sammy Fattah
      </Heading>
      <Heading
        as="h2"
        fontSize={["14px", "18px", "20px"]}
        letterSpacing="wide"
        fontWeight="normal"
        mb={20}
      >
        Developing with React, Typescript, Next.js, Redux & More
      </Heading>
      <ScrollIndicator />
    </Flex>
  );
}
