import "./Create.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuther] = useState("");
  const [image, setImage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new Added");
      setIsPending(false);
      // 한단계 전으로 가기
      history.push("/fun");
    });
  };

  return (
    <div className="create">
      <h2>Add new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author</label>
        <select value={author} onChange={(e) => setAuther(e.target.value)}>
          <option value="sujin">Sujin</option>
          <option value="kevin">Kevin</option>
        </select>
        <input
          type="file"
          valule={image}
          onChange={(e) => console.log(e.target.value)}
        />
        {!isPending && <button>add blog</button>}
        {isPending && <button disabled> Adding Blog..</button>}
      </form>
    </div>
  );
};

export default Create;
