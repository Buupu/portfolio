import { Flex, Link, Icon } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";

export default function Header() {
  return (
    <Flex
      w="full"
      justify="space-between"
      align="center"
      py={3}
      fontSize={["14px", "16px"]}
    >
      <Link>
        <Icon as={HiOutlineMail} mr={3} />
        sammyfattah@gmail.com
      </Link>
      <Link color="primary">Resumé</Link>
    </Flex>
  );
}
