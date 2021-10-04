import { Box, Text, Heading } from "@chakra-ui/react";
export default function EducationCard({
  uni,
  course,
  grade,
  timePeriod,
  reserveAlignment,
}: {
  uni: string;
  course: string;
  grade: string;
  timePeriod: string;
  reserveAlignment?: boolean;
}) {
  return (
    <Box w="full" textAlign={reserveAlignment ? "right" : "left"}>
      <Text fontSize={["12px", "14px", "16px"]}>{course}</Text>
      <Heading
        as="h2"
        color="primary"
        fontSize={["18px", "22px", "32px"]}
        mb={3}
      >
        {uni}
      </Heading>
      <Text fontSize={["12px", "12px", "14px"]}>{timePeriod}</Text>
      <Text fontSize={["10px", "10px", "12px"]}>{grade}</Text>
    </Box>
  );
}
