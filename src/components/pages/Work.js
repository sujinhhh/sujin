import "../../index.css";
import "./works.css";

const Work = () => {
  return (
    <div className="works-body">
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="java">React</h2>
              <p className="java">Comming soon</p>
            </div>
          </div>
          <div className="face face2">
            <h2>Online English School</h2>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="python">JavaScript</h2>
              <p className="python">Comming soon</p>
            </div>
          </div>
          <div className="face face2">
            <h2>Online Order</h2>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="python">WordPress</h2>
              <p className="python">Comming soon</p>
            </div>
          </div>
          <div className="face face2">
            <h2>Plumbming Company</h2>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="python">React Native</h2>
              <p className="python">Comming soon</p>
            </div>
          </div>
          <div className="face face2">{/* <h2>WordPress</h2> */}</div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="python">React</h2>
              <p className="python">Comming soon</p>
            </div>
          </div>
          <div className="face face2">{/* <h2>WordPress</h2> */}</div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="cSharp">Others</h2>
              <p className="cSharp">Comming soon</p>
            </div>
          </div>
          <div className="face face2">
            <h2>React Native</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
