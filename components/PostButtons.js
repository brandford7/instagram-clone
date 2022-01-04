import { Box, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { FiSend, FiMessageCircle } from "react-icons/fi";
import { FaHeart, FaRegBookmark } from "react-icons/fa";

const PostButtons = ({ likepost, color }) => {
  return (
    <>
      <Flex pl="16px" p="6px 16px 8px 16px" align="stretch" flexShrink="0">
        <IconButton
          onClick={likepost}
          icon={<FaHeart size="1.5rem" color={color} />}
          variant="none"
        />
        <IconButton
          transform="rotate(270deg)"
          icon={<FiMessageCircle size="1.5rem" />}
          variant="none"
        />
        <IconButton icon={<FiSend size="1.5rem" />} variant="none" />
        <Box ml="auto" mr="-10px" display="inline-block">
          <IconButton
            display="block"
            pos="relative"
            icon={
              <FaRegBookmark
                size="1.5rem"
                color="rgb(38, 38, 38)"
                fill="rgb(38, 38, 38)"
              />
            }
            variant="none"
          />
        </Box>
      </Flex>
    </>
  );
};

export default PostButtons;
