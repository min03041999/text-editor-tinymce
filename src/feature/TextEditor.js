import { Editor } from "@tinymce/tinymce-react";
import React from "react";

const TextEditor = (props) => {
  return (
    <div>
      <Editor
        apiKey={props.apiKey}
        initialValue={props.initialValue}
        onInit={props.onInit}
      />
    </div>
  );
};

export default TextEditor;
