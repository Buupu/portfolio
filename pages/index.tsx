import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "sections/Header";
import Intro from "sections/Intro";
import Experience from "sections/Experience";
import Projects from "sections/Projects";
import Footer from "sections/Footer";
import Education from "sections/Education";

const Home: NextPage = () => {
  return (
    <Box maxW="1200px" margin="auto" px={8}>
      <Head>
        <title>Sammy Fattah - Front-End Developer</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Intro />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </Box>
  );
};

export default Home;
