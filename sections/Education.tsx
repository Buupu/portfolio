import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import EducationCard from "components/EducationCard";

export default function Education() {
  return (
    <Box textAlign="center" maxW="550px" margin="auto" mb="200px">
      <Heading as="h2" fontSize="x-large" mb={6}>
        Education
      </Heading>
      <Text mb={20} fontSize={["12px", "14px"]}>
        Where and when I have studied to achieved my qualifications
      </Text>
      <VStack maxW="600px" w="100%" spacing="60px" margin="auto">
        <EducationCard
          uni="University of Strathclyde"
          course="BSc (Hons) Computer Information Science"
          grade="1st Class"
          timePeriod="Aug 2016 - June 2019"
        />
        <EducationCard
          uni="Glasgow Clyde College"
          course="HND Software Development"
          grade="Grade A"
          timePeriod="Aug 2015 - June 2016"
          reserveAlignment
        />
        <EducationCard
          uni="Glasgow Clyde College"
          course="HNC Computing"
          grade="Grade A"
          timePeriod="Aug 2014 - Junge 2015"
        />
      </VStack>
    </Box>
  );
}
