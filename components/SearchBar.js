import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement mb="30px" pointerEvents="none">
          <FaSearch size="15px" />
        </InputLeftElement>
        <Input
          placeholder="Search"
          borderRadius="3px"
          border="solid 1px rgba(var(--b6a,219,219,219),1)"
          color=" rgba(var(--i1d,38,38,38),1)"
          align="center"
          
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;
