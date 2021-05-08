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
            # Web developer <br /> # Web Designer <br />
          </p>
        </div>

        <div className="Work-card">
          <span>
            JavaScript. <br />
            React. <br />
            CSS. HTML.
            <br /> WordPress <br />
            Photoshop. <br />
            _________________
          </span>
        </div>
        <div className="Work-card">
          <img className="about_profile" src="./images/profile.png" alt="" />
        </div>
        <div className="Work-card">
          <span>
            I’m a positive, enthusiastic web Developer. I have 2 years
            experience as a Web Designer.
            <br /> Although I don’t have exact experience in this field, I know
            I can perform in this role. Because I learn pretty fast and I am a
            hard worker and I believe nothing is impossible if I really want it.
          </span>
        </div>
        <div className="Work-card">
          <div className="contact">
            <p>Contact</p>
            <span>
              ✉ Email : sujinleeyo@gmail.com <br />
              GitHub : https://github.com/sujinhhh <br />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
