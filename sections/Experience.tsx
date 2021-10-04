import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import Arrow from "components/Arrow";
import Job from "components/Job";

export default function Experience() {
  return (
    <Box textAlign="center" maxW="550px" margin="auto" mb="200px">
      <Heading as="h2" fontSize="x-large" mb={6}>
        Experience
      </Heading>
      <Text mb={20} fontSize={["12px", "14px"]}>
        Front-End Developer specialising in React.  Up to date with the modern
        versions of the library with a deep knowledge of functional components
        and hooks. Experienced with a variety of libraries, tools and frameworks
        for server side rendering, state management, interacting with
        RESTful/non-RESTful APIs and automated testing.
      </Text>
      <VStack w="100%" spacing="30px">
        <Job
          title="Zonal Retail Data Systems"
          timePeriod="FEB 2021 TO PRESENT"
          description="Part of a team developing a web ordering system. The white-label application is used by companies such as JD Wetherspoons, Greene King and Pizza Express, which provides an entry point for their customers to place thousands of orders daily."
        />
        <Arrow />
        <Job
          title="Freelance Web Development"
          timePeriod="AUG 2020 TO PRESENT"
          description="Working with a variety of e-commerces websites on a contract basis using platforms such as Shopify, Woocommerce and WordPress."
        />
        <Arrow />
        <Job
          title="Mott MacDonald"
          timePeriod="JUL 2019 TO AUG 2020"
          description="Developing a range of web applications - mainly for councils across Britain - to track and control their environmental systems such as CCTV, traffic lights, variable message signs and others."
        />
        <Arrow />
        <Job
          title="JPMorgan & Chase"
          timePeriod="JUL 2018 TO AUG 2018"
          description="An intern at one of the largest investment banks in the world. Working under a DevOps team producing internal release tools to be used across the company."
        />
      </VStack>
    </Box>
  );
}
