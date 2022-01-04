import { Box, Button, chakra, Img, Link, Text } from "@chakra-ui/react";
import React from "react";

const Suggestion = ({ image, name,follower }) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="stretch"
        alignContent="stretch"
        mr="12px"
        
        flex="0 0 auto"
      >
        <chakra.img src={image} alt="User" />
      </Box>
      <Box
        display="flex"
        d="column"
        flex="1 1 auto"
        
        minHeight="0"
        w='100%'
        justifyContent="center"
        alignItems="stretch"
        alignContent="stretch"
      >
        <Link>
          {" "}
          <Text
            display="block"
            fontWeight="400"
            fontSize="14px"
            lineHeight="18px"
            m="-3px 0 -4px"
            color="rgba(var(--i1d,38,38,38),1)"
            whiteSpace="nowrap"
            overflow="hidden"
          >
            {name}
          </Text>
        </Link>
        <Text mt="8px" fontSize="14px" color="rgba(var(--f52,142,142,142),1)">
          followed by {follower}
        </Text>
      </Box>
      <Box>
        <Button
          display="inline"
          ml="8px"
          alignItems="center"
          color="rgba(var(--d69,0,149,246),1)"
          p="0"
          bg="0 0"
          appearance="none"
        >
          <Text
            fontWeight="600"
            display="block"
            lineHeight="16px"
            fontSize="12px"
            m="-2px 0 -3px"
          >
            follow
          </Text>
        </Button>
      </Box>
    </>
  );
};

export default Suggestion;
