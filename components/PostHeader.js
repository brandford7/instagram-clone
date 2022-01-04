import { Box, Image, Text, IconButton, Flex, } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const PostHeader = ({userImage,username}) => {
  return (
    <>
      <Flex
        flex="0 0 auto"
        justify="space-between"
        alignItems="center"
        alignContent="stretch"
        flexWrap="nowrap"
        border="0 solid black"
        pos="relative"
        m="0"
        p="0"
        h="60px"
      >
        <Box
          display="flex"
          alignItems="center"
          flexGrow="1"
          flexShrink="1"
          maxWidth="200px"
          p="14px 4px 16px 14px"
          border="0 solid black"
          pos="relative"
        >
          <section>
            <Box display="block" h="fit-content" w="fit-content" pos="relative">
              <Image
                src={userImage}
                h="42px"
                w="42px"
                alt="user"
                rounded="full"
              />
            </Box>
          </section>
          <section>
            <Box
              display="flex"
              d="column"
              ml="14px"
              flexShrink="1"
              overflow="hidden"
              flexWrap="nowrap"
              alignItems="flex-start"
            >
              <Box display="flex" d="column" flexShrink="0">
                <Text isTruncated="true" fontWeight="600">
                  {username}
                </Text>
              </Box>
              {/* <Box>
                <Text>ADVERTISEMENT</Text>
              </Box> */}
            </Box>
          </section>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          pr="8px"
          alignItems="stretch"
        >
          <IconButton
            border="0"
            p="8px"
            m="0"
            cursor="pointer"
            bg="0 0"
            icon={<BsThreeDots />}
          />
        </Box>
      </Flex>
    </>
  );
};

export default PostHeader;
