import React from "react";
import "./FunList.css";
import { Link } from "react-router-dom";

const FunList = ({ lists, title }) => {
  return (
    <div className="container">
      <div>
        <h1> {title} </h1>
      </div>
      <div className="blog-container">
        {lists.map((list) => (
          <div className="list-preview" key={list.id}>
            <Link to={`/fun/${list.id}`}>
              <img src={list.image} alt="fun-images" />
              <h1>{list.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunList;
