import { Box } from "@chakra-ui/react";
import MiniProfile from "./MiniProfile";
import SideBarBottom from "./SidebarBottom";
import{useSession} from "next-auth/react"

const Sidebar = () => {

  const {data: session} = useSession()
  return (
    <>{session &&
      <Box
        display="flex"
        d="column"
        top="94px"
        mb="30px"
        h="100vh"
        m="0"
        p="0"
        pos="fixed"
        maxWidth="293px"
        alignItems="stretch"
      >
        
        <MiniProfile />

        <SideBarBottom />
      </Box>}
    </>
  );
};

export default Sidebar;
