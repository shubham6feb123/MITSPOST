import {
  Box,
  Button,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "../styles/NavBar1.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import { useState, useRef } from "react";

function NavBar1(props) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <Box className={styles.container}>
      {/* logo section */}
      <Box padding={"10px"} textAlign="center">
        <Link href={"/"}>
          <Image
            width={"40px"}
            height="23px"
            src="https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png"
            alt="Medium"
            cursor={"pointer"}
          />
        </Link>
      </Box>

      {/* right section */}
      <Box className={styles.right}>
        <Button
          bgColor="#0F730C"
          variant="solid"
          color="white"
          className={styles.publishButton}
          position="relative"
          onClick={props.onPublish}
          disabled={props.content.length > 0 ? false : true}
        >
          Publish
        </Button>
        {/* More Options button */}
        <Menu isLazy direction="rtl">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MoreHorizIcon />}
            variant="none"
            outline={0}
          />
          <MenuList zIndex={12}>
            <MenuItem>Profile</MenuItem>
            <MenuDivider />
            <MenuItem>Media</MenuItem>
            <MenuDivider />
            <MenuItem>Share Link</MenuItem>
            <MenuDivider />
            <MenuItem>How to use?</MenuItem>
          </MenuList>
        </Menu>
        <Image
          src="https://lh3.googleusercontent.com/ogw/ADea4I7MLpq38SUnxYkMPcWCZOZUImZRHnoZdf4dXr7nOg=s32-c-mo"
          alt="account"
          borderRadius={"50%"}
        />
      </Box>
    </Box>
  );
}

export default NavBar1;
