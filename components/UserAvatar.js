import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

const UserAvatar = ({ img, name }) => {
  return (
    <>
      <Wrap>
        <WrapItem>
          <Avatar
            mx={{ lg: "100px" }}
            onClick={signOut}
            size="sm"
            _hover={{ cursor: "pointer" }}
            name={name}
            src={img}
          />
        </WrapItem>
      </Wrap>
    </>
  );
};

export default UserAvatar;
