import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "components/Header";
import Intro from "components/Intro";
import Experience from "components/Experience";

const Home: NextPage = () => {
  return (
    <Box maxW="1200px" margin="auto" px={8}>
      <Header />
      <Intro />
      <Experience />
    </Box>
  );
};

export default Home;
