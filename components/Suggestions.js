import React, { useState, useEffect } from "react";
import faker from "faker";
import { Box, Img, Text } from "@chakra-ui/react";
import Suggestion from "./Suggestion";


const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
      console.log(suggestions)
    setSuggestions(suggestions);
  }, []);
    return <>
  <Box>
        {suggestions.map((suggestion) => (
      
        <Box key={suggestion.id} display="flex" py='8px' px='16px' flex='0 0 auto' justifyContent='flex-start' alignContent='stretch' alignItems='center' w='100%'>
                <Suggestion img={suggestion?.avatar} name={suggestion.username} follower={suggestion.name}/>
        </Box>
      
        ))}
        </Box>
    </>;
};

export default Suggestions;