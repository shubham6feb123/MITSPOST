import React, { useEffect, useRef, useState } from "react";
import NavBar1 from "../../components/NavBar1";
import PublishModal from "../../components/Modal/PublishModal";
import { useDisclosure } from "@chakra-ui/react";
import TinyMce from "../../components/Editor/TinyMce";

const Editors = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
  const onPublish = (e) => {
    console.log("published", editorRef.current);
    console.log(process.env.NEXT_PUBLIC_TINY_MCE_API_KEY, editorRef.current);
    onOpen();
  };

  const onChange = (content) => {
    // console.log("onchange");
    setContent(editorRef.current.getContent());
  };

  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <NavBar1 onPublish={onPublish} content={content} />
        {/* editor */}
        <TinyMce onChange={onChange} editorRef={editorRef} />

        {/* full modal for publishing*/}
        <PublishModal onClose={onClose} size={"full"} isOpen={isOpen} />
      </div>
    </>
  );
};

export default Editors;
