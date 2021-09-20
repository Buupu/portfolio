import { Flex, Link, Icon } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";

export default function Header() {
  return (
    <Flex w="full" justify="space-between" align="center" py={3}>
      <Link fontSize={["14px", "16px", "18px"]}>
        <Icon as={HiOutlineMail} mr={3} />
        sammyfattah@gmail.com
      </Link>
      <Link color="primary" fontSize={["14px", "16px", "18px"]}>
        Resumé
      </Link>
    </Flex>
  );
}
