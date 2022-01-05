import { Box, Flex, Spacer, Stack, Img, Button } from "@chakra-ui/react";
import HeaderIcon from "./HeaderIcon";
import SearchBar from "./SearchBar";
import { FaRegCompass, FaHome, FaHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import UserAvatar from "./UserAvatar";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { isOpen } from "../redux/Slices/modalslice";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const open = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();

  return (
    <>
      <Flex
        w="100%"
        h="60px"
        mr="20px"
        alignItems="center"
        backgroundColor="rgba(var(--d87,255,255,255),1)"
        borderBottom="1px solid rgba(var(--b6a,219,219,219),1)"
        pos="fixed"
        top="0"
        zIndex="3"
      >
        <Box
          cursor="pointer"
          ml={["5px", "5px", "480px"]}
          
          onClick={() => router.push("/")}
        >
          <Img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
            layout="fill"
            objectFit="contain"
          />
        </Box>

        <Spacer />
        <Box
          display={["none", "none", "flex"]}
          ml={{
            lg: "100px",
          }}
        >
          <SearchBar />
        </Box>
        <Spacer />
        {session ? (
          <>
            <Stack
              ml={{ lg: "200px" }}
              direction="row"
              spacing="4"
              pos="relative"
              pl="24px"
              mr={["10px", "10px", "300px"]}
            >
              <Box onClick={() => router.push("/")}>
                <HeaderIcon Icon={FaHome} Color="black" />
              </Box>
              <HeaderIcon Icon={RiMessengerLine} />
              <Box onClick={() => dispatch(isOpen())}>
                <HeaderIcon Icon={FiPlusSquare} />
              </Box>
              <HeaderIcon Icon={FaRegCompass} />
              <HeaderIcon Icon={FaHeart} />

              <UserAvatar
                name={session?.user?.name}
                img={session?.user?.image}
              />
            </Stack>
          </>
        ) : (
          <Button
            onClick={() => signIn()}
            w="70px"
            shadow="md"
            fontSize="sm"
            alignItems="center"
            mr="30px"
            p="0"
            bg="0 0"
          >
            Sign In
          </Button>
        )}
      </Flex>
    </>
  );
};

export default Header;
