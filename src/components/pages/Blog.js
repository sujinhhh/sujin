import "../../index.css";
import { useState } from "react";
import UploadForm from "../UploadForm";
import ImageGrid from "../ImageGrid";
import Modal from "../Modal";

const Blog = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="out">
      <div className="container">
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
};

export default Blog;
