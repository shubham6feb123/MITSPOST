import {
  Box,
  Button,
  Icon,
  Image,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
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
        <Button
          className={styles.moreButton}
          rightIcon={<MoreHorizIcon />}
          colorScheme="blue"
          variant="outline"
          onClick={() => {
            setShowMoreOptions((prev) => !prev);
          }}
        />

        {/* more options box */}
        <Box
          className={styles.moreOptions}
          display={showMoreOptions ? "" : "none"}
        >
          <List spacing={2}>
            <ListItem className={styles.listItem}>
              {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
              Your Profile
            </ListItem>
            <ListItem className={styles.listItem}>
              {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
              Media
            </ListItem>
            <ListItem className={styles.listItem}>
              {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
              Share link
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem className={styles.listItem}>
              {/* <ListIcon as={MdSettings} color="green.500" /> */}
              How to use?
            </ListItem>
          </List>
        </Box>

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
