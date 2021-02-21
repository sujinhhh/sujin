import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./ListDetails.css";

const ListDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/fun");
    });
  };

  return (
    <div className="list-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="article">
          <h2> {blog.title}</h2>
          <p>Written by {blog.author}</p>
          <img src={blog.image} alt="img" />
          <div className="paragragh">{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default ListDetails;
