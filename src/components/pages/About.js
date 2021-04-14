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
        <h1>Sujin Lee</h1>

        <div className="Work-card">
          <span>
            # Web developer <br /> # Web Designer
          </span>
        </div>
        <div className="Work-card">
          <span>
            JavaScript. React. <br />
            CSS. HTML. WordPress
          </span>
        </div>
        <div className="Work-card">
          <span>
            Things I like : Dog, <br />
            Painting, Video Editing
          </span>
        </div>
        <div className="Work-card">
          <div className="contact">
            <p>Contact</p>
            <span>
              ✉ Email : ccclalasj@gmail.com <br />
              GitHub : https://github.com/sujinhhh <br />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
