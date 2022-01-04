import { Box, Button, Flex, Img, Stack } from "@chakra-ui/react";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        m="32px auto 0"
        maxWidth="935px"
        flexGrow="1"
        w="100%"
        pb="32px"
      >
        <section>
          <Box
            display="flex"
            backgroundImage="	https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png"
            h="618px"
            w="454px"
            backgroundPosition="0 0"
            bgSize="454px 618px"
            alignSelf="center"
            ml="-35px"
            mr="-15px"
          ></Box>
        </section>
        <section>
          <Box
            display="flex"
            flexGrow="1"
            maxHeight="653px"
            maxWidth="350px"
            justifyContent="center"
            mt="12px"
            w="100%"
          >
            <Flex
              h="339px"
              w="350px"
              direction="column"
              align="center"
              justify="center"
              border="1px solid rgba(var(--b6a,219,219,219),1)"
              borderRadius="1px"
              m="0 0 10px"
              p="10px 0"
            >
              <Box>
                <Img
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                  alt="Instagram"
                  layout="fill"
                  objectFit="contain"
                  backgroundSize="440px 411px"
                  backgroundPosition="0 -129px"
                  m="22px 0 12px"
                />
              </Box>

              {Object.values(providers).map((provider) => (
                <Box key={provider.name}>
                  <Button
                    shadow="lg"
                    color="primary"
                    bg="blue.300"
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  >
                    Sign in with {provider.name}
                  </Button>
                </Box>
              ))}
            </Flex>
          </Box>
        </section>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
