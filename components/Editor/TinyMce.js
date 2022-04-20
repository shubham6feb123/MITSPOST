import { Editor } from "@tinymce/tinymce-react";

const TinyMce = ({ onChange, editorRef }) => {
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
        id="tiny-react_68881910131649708781806"
        onInit={(evt, editor) => (editorRef.current = editor)}
        onChange={onChange}
        // initialValue="<p>This is the initial content of the editor.</p>"
        placeHolder="Start Typing"
        init={{
          height: 591,
          paste_data_images: true,
          menubar: true,
          plugins: [
            "advlist",
            "pageembed",
            "editimage",
            "emoticons",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "pagebreak",
            "wordcount",
            "help",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
};

export default TinyMce;
