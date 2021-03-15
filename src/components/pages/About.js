import "../../index.css";
import "./About.css";

const aboutMe = [
  { name: "sujin", hobby: "programing" },
  { name: "age", hobby: "40" },
];

const About = () => {
  return (
    <main className="about-container">
      {aboutMe.map((me) => {
        return (
          <li className="about-contents" key={me.name}>
            {me.name} - {me.hobby}
          </li>
        );
      })}
    </main>
  );
};

export default About;
