import "./App.css";

import { Amination } from "./Components/Animation/Amination";

import img1 from "./images/img1.svg";
import img2 from "./images/img2.svg";
import img3 from "./images/img3.svg";
import avatar from "./images/avatar.png";

function App() {
  return (
    <div>
      <div className="firstdiv">
        <div className="heading">
          <p id="Mainheading">
            <b>CORTEX</b> COPYWRITER{" "}
          </p>
          <p id="Mainheading2">
            Enhance your communications with psychology-based copywriting and UX
            writing
          </p>
          <button id="bottom">Send a message</button>
        </div>

        <div className="tiny">
          <Amination />
        </div>
      </div>

      <div className="secdiv">
        <div className="svg">
          <img src={img1} alt="img" />
        </div>

        <div className="secheading">
          <h1>UX Writing</h1>
          <p id="secpara">
            I develop clear and useful text in product interfaces to help users
            reach a specific goal, whether that's completing a form or tapping a
            button. This includes every type of content from on-screen help
            systems, user onboarding and in-app messages to push notifications
            and tooltips.
          </p>
        </div>
      </div>

      <div className="secdiv">
        <div className="centerheading">
          <h1>Website Copywriting</h1>
          <p id="secpara">
            Your website is a dialogue with your audience. I capture the essence
            of your business and communicate it clearly. Carefully considered
            writing and SEO best practices allow me to craft the perfect user
            journey online. Let me draw the map that guides users every step of
            the way from discovery, to consideration, to conversion.
          </p>
        </div>
        <div className="centersvg">
          <img src={img2} alt="img" />
        </div>
      </div>

      <div className="secdiv">
        <div className="svg">
          <img src={img3} alt="img" />
        </div>

        <div className="secheading">
          <h1>Content Writing</h1>
          <p id="secpara">
            Give your business a competitive edge with powerful content that can
            be targeted to any segment of your audience. No matter how large or
            complex your project, my custom-built solutions including articles,
            eDMs, and case studies will help you implement a plan that maximizes
            your business’s online exposure.
          </p>
        </div>
      </div>



      <div className="about">
        <div className="avatar">
          <img src={avatar}  alt="img"/>
        </div>
        <div className="details">
          <h1>About Me</h1>
          <p>
            I am Thanwar Das.
            <br/>
            I am learnig Serverless SaaS development.
          </p>
        </div>
        <div id="footer">
          <h3>&copy; THANWAR 2021</h3>
        </div>
      </div>
      








    </div>
  );
}

export default App;
