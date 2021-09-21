import { Box, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import Arrow from 'components/Arrow';
import Job from 'components/Job';

export default function Experience() {
  return (
    <Box textAlign="center" maxW="550px" margin="auto" mb="200px">
      <Heading as="h2" fontSize="x-large" mb={6}>
        Experience
      </Heading>
      <Text mb={20} fontSize={['12px', '14px']}>
        Proident proident reprehenderit consectetur aliqua culpa magna aliqua
        mollit voluptate cillum officia. Exercitation enim excepteur proident
        consequat pariatur et occaecat. Occaecat veniam qui officia tempor dolor
        consectetur aute laborum ea sunt fugiat magna ad id. Magna laboris
        excepteur nulla tempor ad in proident id do. Dolor aute tempor ullamco
        ut.
      </Text>
      <VStack w="100%" spacing="30px">
        <Job
          title="Zonal Retail Data Systems"
          timePeriod="FEB 2021 TO PRESENT"
          description="consequat pariatur et occaecat. Occaecat veniam qui officia tempor dolor consectetur aute laborum ea sunt fugiat magna ad id. Magna laboris excepteur nulla tempor ad in proident id do. Dolor aute tempor ullamco"
        />
        <Arrow />
        <Job
          title="Freelance Web Development"
          timePeriod="AUG 2020 TO PRESENT"
          description="consequat pariatur et occaecat. Occaecat veniam qui officia tempor dolor consectetur aute laborum ea sunt fugiat magna ad id. Magna laboris excepteur nulla tempor ad in proident id do. Dolor aute tempor ullamco"
        />
        <Arrow />
        <Job
          title="Mott MacDonald"
          timePeriod="JUL 2019 TO AUG 2020"
          description="consequat pariatur et occaecat. Occaecat veniam qui officia tempor dolor consectetur aute laborum ea sunt fugiat magna ad id. Magna laboris excepteur nulla tempor ad in proident id do. Dolor aute tempor ullamco"
        />
        <Arrow />
        <Job
          title="JPMorgan & Chase"
          timePeriod="JUL 2018 TO AUG 2018"
          description="consequat pariatur et occaecat. Occaecat veniam qui officia tempor dolor consectetur aute laborum ea sunt fugiat magna ad id. Magna laboris excepteur nulla tempor ad in proident id do. Dolor aute tempor ullamco"
        />
      </VStack>
    </Box>
  );
}
