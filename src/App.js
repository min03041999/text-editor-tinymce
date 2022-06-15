import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import TextEditor from "./feature/TextEditor";

function App() {
  const [initialValue, setInitialValue] = useState();
  const editorRef = useRef(null);

  const handleSubmitOnClick = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      // an application would save the editor content to the server here
      setInitialValue(content);
    }
    console.log(initialValue);
  };

  const { handleSubmit } = useForm();

  return (
    <section className="App">
      <form onSubmit={handleSubmit(handleSubmitOnClick)}>
        <TextEditor
          apiKey={"b6p5nnv5z7ivpda4drprz2dsg9o3rrytzoobpibyd1hgm4ev"}
          initialValue={initialValue}
          onInit={(evt, editor) => (editorRef.current = editor)}
        />

        <button type="submit" className="signup-button">
          Next
        </button>
      </form>
    </section>
  );
}

export default App;
