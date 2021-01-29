import FunList from "./FunList";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Fun = () => {
  const { data: lists, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div>
      {error && <div> {error} </div>}
      {isPending && <h1> Loarding .. 👍 </h1>}
      {lists && <FunList lists={lists} title="Fun Lists" />}
    </div>
  );
};

export default Fun;
