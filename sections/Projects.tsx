import { Box, Heading, Text, SimpleGrid, Link } from "@chakra-ui/react";
import ProjectCard from "components/ProjectCard";
export default function Projects() {
  return (
    <Box mb="120px" textAlign="center">
      <Heading as="h2" fontSize="x-large" mb={6}>
        My Projects
      </Heading>
      <Text fontSize={["12px", "14px"]} maxW="600px" margin="auto" mb={20}>
        Some projects I've been working on recently.
      </Text>
      <SimpleGrid columns={[1, 1, 3]} spacing="30px">
        <ProjectCard
          title="Chakra OTP Input"
          description="One Time Password Component Package for Chakra UI."
          githubLink="https://github.com/Buupu/chakra-otp-input"
          demoLink="https://githubbox.com/Buupu/chakra-otp-input/tree/main/demo"
          technologies={["Chakra Ui", "NPM", "Typescript"]}
        />
        <ProjectCard
          title="Airbnb clone"
          description="A project cloning the home and search page of the popular property rental site Airbnb."
          githubLink="https://github.com/Buupu/airbnb"
          demoLink="https://airbnb-vu9hdd2tb-buupu.vercel.app/"
          technologies={["Chakra Ui", "Next.js", "Geolib", "Framer Motion"]}
        />
        <ProjectCard
          title="Rick and Morty "
          description="An applications for searching characters from the animated series 'Rick and Morty'. This was developed to explore the speed and efficency of Next.js and GraphQL."
          githubLink="https://github.com/Buupu/rick-and-morty"
          demoLink="https://rick-and-morty-3nyfhtkn3-buupu.vercel.app/"
          technologies={["Apollo Client", "GraphQL", "Next.js", "Chakra Ui"]}
        />
      </SimpleGrid>
      <Box mt={3} textAlign="right" fontSize="12px" fontWeight="bold">
        <Link href="https://github.com/Buupu" target="_blank">
          View more on Github {">"}
        </Link>
      </Box>
    </Box>
  );
}
