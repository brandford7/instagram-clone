import { Box, Button, Flex, Img, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useSession,signOut } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();
console.log(session)
  return (
    <>
      <Flex
        mt="18px"
        alignItems="center"
        mb="10px"
        h="auto"
        justifyContent="space-between"
      >
        <section>
          <Box
            pos="absolute"
            top="-5px"
            left="-5px"
            width="66px"
            h="66px"
            userSelect="none"
          >
            <Link
              w="56px"
              display="block"
              h="56px"
              flex="0 0 auto"
              overflow="hidden"
              pos="relative"
              cursor="pointer"
              bg="rgba(var(--b3f,250,250,250),1)"
              borderRadius="50%"
              _visited={{
                color: "rgba(var(--fe0,0,55,107),1)",
                textDecoration: "none",
              }}
            >
              <Img
                src={session?.user?.image}
                alt=""
                h="100%"
                w="100%"
              />
            </Link>
          </Box>
        </section>
        <section>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="stretch"
            alignContent="stretch"
            ml="12px"
            flex="1 1 auto"
            minHeight="0"
            minWidth="0"
            pos="relative"
            p="0"
            d="column"
          >
            <Link
              cursor="pointer"
              color="rgba(var(--i1d,38,38,38),1)"
              fontWeight="600"
              textOverflow="ellipsis"
              _visited={{ textDecoration: "none" }}
            >
              <Text>{ session?.user?.username}</Text>
            </Link>
            <Link
              cursor="pointer"
              color="rgba(var(--i1d,38,38,38),1)"
              overflowX="hidden"
              textOverflow="ellipsis"
              _visited={{ textDecoration: "none" }}
            >
              <Text>Brandford Junior</Text>
            </Link>
          </Box>
        </section>
        <section>
          <Button onClick={signOut}
            variant="link"
            border="0"
            color="rgba(var(--d69,0,149,246),1)"
            display="inline"
            p="0"
            pos="relative"
            bg="0 0"
            appearance="none"
            cursor="pointer"
            fontWeight="600"
            textAlign="center"
            textOverflow="ellipsis"
            textTransform="inherit"
            w="auto"
            fontSize="12px"
            lineHeight="18px"
          >
            Signout
          </Button>
        </section>
      </Flex>
    </>
  );
};

export default MiniProfile;
