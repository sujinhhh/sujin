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
        <div className="about_name">
          <h1>Sujin Lee</h1>
          <p>
            # Web Developer <br /> # Web Designer <br />
          </p>
        </div>

        <div className="Work-card">
          <span>
            ✉ Email : sujinleeyo@gmail.com <br />
          </span>
          <p>------</p>
          <span>
            <a href="https://github.com/sujinhhh" target="_blank">
              GitHub : https://github.com/sujinhhh <br />
            </a>
          </span>
        </div>
        <div className="Work-card">
          <img className="about_profile" src="./images/profile.png" alt="" />
        </div>
        <div className="Work-card">
          <span>
            Hi, My name is Sujin. <br /> I’m a positive, enthusiastic Web
            Developer. <br /> I have 3 years experience as a Web Designer. Now I
            fell in love with programming and I am so passionate about it.
            <br /> I am a fast learner, great with teamwork and a hard worker. I
            guarantee I will perform highly in this role, I will be very useful
            to your company.
          </span>
        </div>
        <div className="Work-card">
          <div className="skills">
            <p> Skills</p>
            <span className="skill">
              <img src="./logo192.png" alt="logo192" />
              <img src="./html.png" alt="html" />
              <img src="./js.png" alt="js" />
            </span>
            <span className="big">
              <img src="./css.png" alt="css" />
              <img src="./photoshop.png" alt="photoshop" />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
