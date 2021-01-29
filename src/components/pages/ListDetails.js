import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./ListDetails.css";

const ListDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

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
        </article>
      )}
    </div>
  );
};

export default ListDetails;
