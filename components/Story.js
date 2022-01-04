import { Box, chakra, Text } from "@chakra-ui/react";

const Story = ({ image, name }) => {
  return (
    <>
      <Box   mx="15px" h="68px" w="68px" >
        <chakra.img
    h='100%'
          
          rounded="full"
          src={image}
          alt=""
          border="0.5px solid red"
          p="1.5px"
        />
        <Text isTruncated fontSize="xs"  h='100%' textAlign="center" >
          {name}
        </Text>
      </Box>
    </>
  );
};

export default Story;
