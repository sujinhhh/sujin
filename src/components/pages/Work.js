import "../../index.css";
import "./works.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="works-body">
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="cSharp">Kids Online English School</h2>

              <p className="detail">
                <h4>> Using Skills</h4> : React Redux, firebase, materialize css
                library
              </p>

              <p className="detail">
                <h4>> Feature </h4>: Write, Delete, Login, Vidoes
              </p>
              <p className="detail">
                <a href="https://seramschool.web.app/" target="_blank">
                  <h3>Go to page</h3>
                </a>
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>React Project</h2>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="cSharp">Online Order Page</h2>
              <p className="detail">
                <h4>> Using Skills</h4> : JavaScript, CSS,
              </p>

              <p className="detail">
                <h4>> Feature </h4>: Shopping cart, Add items, delete items
              </p>
              <p className="detail">
                <a href="https://sujinhhh.github.io/shop/" target="_blank">
                  <h3>Go to page</h3>
                </a>
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>JavaScript Project</h2>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="cSharp">Plumbming Company</h2>
              <p className="detail">
                <h4>> Using Skills</h4> : WordPress
              </p>

              <p className="detail">
                <h4>> Features </h4>: Blog, Write, Delete, Edit,
              </p>
              <p className="detail">
                <a href="https://sulbi.link/" target="_blank">
                  <h3>Go to page</h3>
                </a>
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>WordPress Project</h2>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="cSharp">Youtube Page Clone</h2>
              <p className="detail">
                <h4>> Using Skills</h4> : HTML, CSS, flex study
              </p>

              <p className="detail">
                <h4>> Features </h4>: Play video
              </p>

              <p className="detail">
                <a
                  href="https://sujinhhh.github.io/youtubeStudy"
                  target="_blank"
                >
                  <h3>Go to page</h3>
                </a>
              </p>
            </div>
            <div className="face face2">
              <h2>HTML/CSS Project</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="cSharp">Netflix Clone page</h2>
              <p className="detail">
                <h4>> Using Skills</h4> : React, axios, firebase, css, library
              </p>

              <p className="detail">
                <h4>> Features </h4>: movie-trailer, live updated movie list,
                scroll movies
              </p>

              <p className="detail">
                <Link to="/movie" target="_blank">
                  <h3>Go to page</h3>
                </Link>
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>React Project</h2>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="cSharp">Online shop</h2>
              <p className="detail">
                <h4>> Using Skills</h4> : React, Redux, firebase auth, CSS
              </p>

              <p className="detail">
                <h4>> Features </h4>: Shopping cart, Add, Delete,
              </p>

              <p className="detail">
                <Link to="/shop" target="_blank">
                  <h3>Go to page</h3>
                </Link>
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>React Project</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
