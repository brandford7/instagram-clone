import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import Suggestions from "./Suggestions";

const SideBarBottom = () => {
  return (
    <>
      <Flex
        m="0 0 12px"
        bg="rgba(var(--b3f,250,250,250),1)"
        w="325px"
        h='19px'
        direction="column"
        
        
      >
        <section>
          <Flex w='100%'
            p="4px 16px"
            mt="12px"
            flex="0 0 auto"
            justifyContent="flexstart"
            alignItems="center"
            alignContent="stretch"
          >
            <Box
              display="flex"
              flex="1 1 auto"
              minHeight="0"
              minWidth="0"
              justifyContent="space-between"
              alignItems="stretch"
              alignContent="stretch"
            >
              <Text>Suggestions for you</Text>
              <Link
                border="0"
                display="inline"
                p="0"
                w="auto"
                fontWeight="600"
                fontSize="12px"
                pos="relative"
                textAlign="center"
                color="rgba(var(--f75,38,38,38),1)"
              >
                See All
              </Link>
            </Box>
          </Flex>
        </section>
        <section>
          <Flex
            ml="4px"
            mb="4px"
            flex="0 0 auto"
            justifyContent="flex-start"
            alignItems="stretch"
            alignContent="stretch"
          >
            
            <Box display="flex" d='column' py='0px' ><Suggestions/></Box>
          </Flex>
        </section>
      </Flex>
    </>
  );
};

export default SideBarBottom;
