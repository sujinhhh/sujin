import "../../index.css";
import "./About.css";

const aboutMe = [
  { name: "sujin", hobby: "programing" },
  { name: "age", hobby: "40" },
];

const About = () => {
  return (
    <main className="About-container">
      <div className="card-container">
        <h1>Pokemon Card, Holo Effect</h1>

        <div className="Work-card">
          <span>+ color-dodge</span>
        </div>
        <div className="Work-card">
          <span>+ color-dodge</span>
        </div>
        <div className="Work-card">
          <span>+ color-dodge</span>
        </div>
        <div className="Work-card">
          <span>+ color-dodge</span>
          <div className="Work-card"></div>
        </div>
      </div>
    </main>
  );
};

export default About;
