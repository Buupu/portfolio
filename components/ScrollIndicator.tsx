import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const MotionBox = motion(Box);
  return (
    <Flex align="center">
      <Box
        h="45px"
        w="20px"
        border="1px solid white"
        borderRadius="full"
        mr={3}
      >
        <MotionBox
          w="12px"
          h="12px"
          margin="4px auto"
          bg="white"
          borderRadius="full"
          animate={{ y: [22, 0, 22] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </Box>
      <Text color="primary" fontSize="sm">
        Learn more..
      </Text>
    </Flex>
  );
}
