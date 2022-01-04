import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

const MainLayout = () => {
  return (
    <>
      <Box
        display="flex"
        flexGrow="1"
        alignItems="stretch"
        order="4"
        border="0 solid black"
        d="column"
        flexShrink="0"
        flexWrap="nowrap"
        pos="relative"
        bg=" rgba(var(--b3f,250,250,250),1)"
      >
        <Flex
          pt={{ md: "30px", lg: "30px", xl: "30px" }}
          flexWrap="nowrap"
          maxWidth="935px"
          m="0 auto"
          w="100%"
          flexGrow="1"
          mt="50px"
          pos="relative"
        >
          <Box
            display="flex"
            w="100%"
            d="column"
            mr="28px"
            maxWidth="614px"
            float="left"
          >
            <Stories />
            <Posts />
          </Box>
          <Box
            display={{ base: "none", md: "flex", lg: "flex", xl: "flex" }}
            left="839px"
            right="0"
          >
            <Sidebar />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default MainLayout;
