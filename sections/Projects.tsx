import { Box, Heading, Text, SimpleGrid, Link } from '@chakra-ui/react';
import ProjectCard from 'components/ProjectCard';
export default function Projects() {
  return (
    <Box mb="120px" textAlign="center">
      <Heading as="h2" fontSize="x-large" mb={6}>
        My Projects
      </Heading>
      <Text fontSize={['12px', '14px']} maxW="600px" margin="auto" mb={20}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Text>
      <SimpleGrid columns={[1, 1, 3]} spacing="30px">
        <ProjectCard
          title="Airbnb clone"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
          githubLink=""
          demoLink=""
          technologies={[]}
        />
        <ProjectCard
          title="Airbnb clone"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
          githubLink=""
          demoLink=""
          technologies={[]}
        />
        <ProjectCard
          title="Airbnb clone"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
          githubLink=""
          demoLink=""
          technologies={[]}
        />
      </SimpleGrid>
      <Box mt={3} textAlign="right" fontSize="12px">
        <Link>View more on Github {'>'}</Link>
      </Box>
    </Box>
  );
}
