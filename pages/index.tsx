import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "sections/Header";
import Intro from "sections/Intro";
import Experience from "sections/Experience";
import Projects from "sections/Projects";

const Home: NextPage = () => {
  return (
    <Box maxW="1200px" margin="auto" px={8}>
      <Header />
      <Intro />
      <Experience />
      <Projects />
    </Box>
  );
};

export default Home;
