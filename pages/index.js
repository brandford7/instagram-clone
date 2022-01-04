import { Box, Flex, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import ModalComponent from "../components/ModalComponent";

export default function Home() {
  return (
    <>
      {/*   <div className="main__app">*/}
      <VStack
        overflowY="hidden"
        minHeight="100vh"
        flexGrow="1"
        align="stretch"
        border="1px solid black"
        flexShrink="0"
        position="relative"
        font="inherit"
      >
        <Head>
          <title>Home</title>

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ModalComponent />
        <Header />
        <MainLayout />
      </VStack>
      {/*  </div>*/}
    </>
  );
}
