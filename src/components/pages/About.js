import "../../index.css";
import "./About.css";

const aboutMe = [
  { name: "sujin", hobby: "programing" },
  { name: "age", hobby: "40" },
];

const About = () => {
  return (
    <main className="Work-container">
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
      </div>

      <div className="Work-card"></div>
    </main>
  );
};

export default About;
