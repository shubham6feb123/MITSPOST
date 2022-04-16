import { Box } from "@chakra-ui/react";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <Box bg="#FFFFFF" w="100%" h={"100vh"} color="black" display={"flex"}>
        <SideBar />
        This is the Box This is the Box This is the BoxThis is the BoxThis is
        the BoxThis is the BoxThis is the BoxThis is the BoxThis is the BoxThis
        is the BoxThis is the BoxThis is the Box
      </Box>
    </>
  );
}
