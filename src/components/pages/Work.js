import "../../index.css";
import "./Work.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <article>
      <div className="project-header">
        <h2> Here's some of my work</h2>
      </div>

      {/* Project Card */}

      <div className="contents-card">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="mini-card">
            <h1>WordPress Wesite</h1>
          </div>
        </Link>
        <div className="mini-card">
          <h1>Apps</h1>
        </div>
        <div className="mini-card">
          <h1>Videos</h1>
        </div>
      </div>
    </article>
  );
};

export default Work;
