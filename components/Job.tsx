import { Text, Box, Heading, Stack } from "@chakra-ui/react";

export default function Job({
  title,
  timePeriod,
  description,
}: {
  title: string;
  timePeriod: string;
  description: string;
}) {
  return (
    <Stack direction={["column", "row"]} spacing={["20px", "80px"]}>
      <Box textAlign={["left", "right"]} flex={1}>
        <Text color="primary" fontSize="12px">
          {timePeriod}
        </Text>
        <Heading as="h2" fontSize={["18px", "26px", "32px"]}>
          {title}
        </Heading>
      </Box>
      <Text flex={1} fontSize="12px" textAlign="left">
        {description}
      </Text>
    </Stack>
  );
}
