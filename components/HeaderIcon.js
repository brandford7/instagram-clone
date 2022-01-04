import { Box, IconButton } from "@chakra-ui/react";

const HeaderIcon = ({ Icon,Color,bG }) => {
  return (
    <>
      <Box display={['none','none','flex']}>
      <IconButton borderRadius='none' border='0px none' 
        variant="none"
        icon={<Icon color={Color} bg={bG} w='24' h='24' />}
        _hover={{ cursor: "pointer", transform:'scale(1.25)', transitionDuration:100, }}
        />
        </Box>
    </>
  );
};

export default HeaderIcon;
