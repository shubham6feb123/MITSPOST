import { Box, Icon, Image, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "../styles/Sidebar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Link from "next/link";

const hr = {
  background: "#e6e6e6",
  height: "1px",
  width: "27px",
};
function SideBar() {
  const router = useRouter();
  // console.log(router);
  return (
    <Box className={styles.container}>
      {/* logo section */}
      <Box padding={"10px"} display={"flex"} justifyContent="center">
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
      {/* middle options section */}
      <Box className={styles.middleOptions}>
        <Tooltip label="Home" placement="right" className={styles.tooltip}>
          <Icon as={HomeOutlinedIcon} className={styles.icons} />
        </Tooltip>

        <Tooltip
          label="Notifications"
          placement="right"
          color="black"
          className={styles.tooltip}
        >
          <Icon as={NotificationsOutlinedIcon} className={styles.icons} />
        </Tooltip>
        <Tooltip label="Lists" placement="right" className={styles.tooltip}>
          <Icon as={BookmarksOutlinedIcon} className={styles.icons} />
        </Tooltip>
        <Tooltip label="Stories" placement="right" className={styles.tooltip}>
          <Icon as={ArticleOutlinedIcon} className={styles.icons} />
        </Tooltip>
        <hr style={hr} />
        <Tooltip label="Write" placement="right" className={styles.tooltip}>
          <Icon
            as={EditOutlinedIcon}
            className={styles.icons}
            onClick={() => {
              router.push("/new-story");
            }}
          />
        </Tooltip>
      </Box>
      {/* account section */}
      <Box display={"flex"} justifyContent="center">
        <Image
          src="https://lh3.googleusercontent.com/ogw/ADea4I7MLpq38SUnxYkMPcWCZOZUImZRHnoZdf4dXr7nOg=s32-c-mo"
          alt="account"
          borderRadius={"50%"}
        />
      </Box>
    </Box>
  );
}

export default SideBar;
