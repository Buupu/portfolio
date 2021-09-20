import { Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";
import ArrowSvg from "assets/Arrow.svg";

export default function Arrow() {
  return (
    <HStack spacing="80px">
      <Flex
        flex={1}
        justify="flex-end"
        position="relative"
        height="60px"
        w="12px"
      >
        <Image src={ArrowSvg} layout="fill" objectFit="cover" />
      </Flex>
      <Flex flex={1} display={["none", "flex"]}></Flex>
    </HStack>
  );
}
