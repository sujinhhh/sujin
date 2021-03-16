import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./UploadForm.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected) {
      setFile(selected);
    }
  };
  return (
    <form className="uploadForm">
      {/* <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label> */}
      <div className="output">
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
