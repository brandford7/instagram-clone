import { useEffect, useState } from "react";
import { Box, } from "@chakra-ui/react";
import faker from "faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);

  return (
    <>
      <Box
        display="block"
        mt="0"
        mb="24px"
        border="1px solid rgba(var(--b6a,219,219,219),1)"
        borderRadius="3px"
        p="16px 0"
        overflowX="hidden"
        overflowY="hidden"
      >
        <Box
          display="flex"
          h={["70px","105px","105px"]}
          outline="0"
          overflowY="hidden"
          overflowX="auto"
          
        
          
        >
          {session && (
            <Box>
              <Story
                key={session?.user?.uid}
                name={session?.user?.username}
                image={session?.user?.image}
              />
            </Box>
          )}
          {suggestions.map((profile) => (
            <Box key={profile.id}>
              <Story name={profile.username} image={profile.avatar} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Stories;
