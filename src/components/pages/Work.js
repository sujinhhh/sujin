import "../../index.css";
import "./Work.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="Work-container">
      work
      <Link to="/movie"> Move List</Link>
    </div>
  );
};

export default Work;
