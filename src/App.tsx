import { useState } from "react";
import "./App.css";
import quotes from "./assets/quotes.json";
import logo from "./assets/logo.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import videoFile from "./assets/Nusa Penida Bali.mp4";
import { IoMdQuote } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import project1 from "./assets/la-lune.jpg";
import project2 from "./assets/studio-agatho.jpg";
import project3 from "./assets/TechCare.png";
import memory from "./assets/Memory Game.png";
import wiki from "./assets/Wikipedia Viewer.png";
import calculator from "./assets/Javascript Calculator.png";
import weather from "./assets/Weather App.png";
import drum from "./assets/Drum Machine.png";
import tictactoe from "./assets/Tic Tac Toe Game.png";
import pomodoro from "./assets/Pomodoro Clock.png";
import { FaGithub } from "react-icons/fa";
import EmailToggle from "./assets/emailtoggle.tsx";
import FaqToggle1 from "./assets/faqtoggle1.tsx";
import FaqToggle2 from "./assets/faqtoggle2.tsx";
import FaqToggle3 from "./assets/faqtoggle3.tsx";
import FaqToggle4 from "./assets/faqtoggle4.tsx";
import FaqToggle5 from "./assets/faqtoggle5.tsx";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote);

  const changeQuote = () => {
    setQuote(getRandomQuote);
  };

  const handleAlert = () => {
    alert("Due to lack of publishment permission, the link you desire is not available");
    return;
  };

  return (
    <div className="container">
      <div id="page1">
        <div id="navbar">
          <img className="personal-logo" src={logo}></img>
          <div className="directory">
            <ul className="navbar-list">
              <li>
                <a href="#page2">Projects</a>
              </li>
              <li>
                <a href="#page3-skills">Profile</a>
              </li>
              <li>
                <a href="#page5-stay-connected">Contact</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/ericko.marlin/" target="_blank">
              <FaInstagram className="icon-navbar" />
            </a>
            <a href="https://www.facebook.com/ericko.marlin/" target="_blank">
              <FaFacebookF className="icon-navbar" />
            </a>
            <a href="https://www.linkedin.com/in/ericko-marlin-3615387a/" target="_blank">
              <FaLinkedinIn className="icon-navbar" />
            </a>
            <a href="https://wa.me/+6285692533411?" target="_blank">
              <FaWhatsapp className="icon-navbar" />
            </a>
          </div>
        </div>
        <div id="music-toggle"></div>
        <div className="video-text-container">
          <video autoPlay loop muted id="my-video" src={videoFile} />
          <div className="text-overlay">
            <h1>ERICK</h1>
          </div>
        </div>
        <div className="quote-box">
          <div className="quote-content">
            <h2 className="text">
              <IoMdQuote />
              {quote.quote}
              <IoMdQuote />
            </h2>
            <div className="author-button-box">
              <h4 id="author">- {quote.author}</h4>
              <MdOutlineKeyboardDoubleArrowRight onClick={changeQuote} className="quote-button"></MdOutlineKeyboardDoubleArrowRight>
            </div>
          </div>
        </div>
      </div>

      <div id="page2">
        <h1 className="project-giant-title">PROJECTS</h1>
        <p className="list-of-projects">List Of Projects</p>
      </div>

      <div id="page2-project-container">
        <div className="project-1">
          <div className="project-detail">
            <div className="project-client">Lune Brothers</div>
            <div className="project-year">2025 | Jakarta, Indonesia</div>
            <div className="position">Front End Dev</div>
            <div className="project-name">La Lune French Bistro</div>
            <div className="project-description">To develop a landing page for a restaurant</div>
            <div className="project-link">Dummy Project</div>
          </div>
          <a href="https://lalunefrenchbistro.netlify.app/" target="_blank">
            <img src={project1} alt="la-lune" id="la-lune-image" />
          </a>
        </div>
        <div className="project-2">
          <div className="project-detail">
            <div className="project-client">Agatha Sisters</div>
            <div className="project-year">2025 | Jakarta, Indonesia</div>
            <div className="position">Front End Dev</div>
            <div className="project-name">Studio Agatho</div>
            <div className="project-description">To develop a landing page for a designer company</div>
            <div className="project-link">Dummy Project</div>
          </div>
          <a href="https://studio-agatho.netlify.app/" target="_blank">
            <img src={project2} alt="studio-agatho" id="studio-agatho-image" />
          </a>
        </div>
        <div className="project-3">
          <div className="project-detail">
            <div className="project-client">EM Medical Center</div>
            <div className="project-year">2025 | Jakarta, Indonesia</div>
            <div className="position">Front End Dev</div>
            <div className="project-name">EM Medical Center</div>
            <div className="project-description">To develop a page that show patients' data</div>
            <div className="project-link">Dummy Project</div>
          </div>
          <a href="" onClick={handleAlert}>
            <img src={project3} alt="TechCare" id="techcare-image" />
          </a>
        </div>
        <div className="other-project">
          <a className="card" href="https://memorylightgame.netlify.app/" target="_blank">
            <h3 className="card-title">Memory Sound Game</h3>
            <img className="card-image" src={memory} alt="" />
          </a>
          <a className="card" href="https://tictactoe123game.netlify.app/" target="_blank">
            <h3 className="card-title">Tic Tac Toe</h3>
            <img className="card-image" src={tictactoe} alt="" />
          </a>
          <a className="card" href="https://codepen.io/Ericko-Marlin/pen/yyJjRbZ?editors=1111" target="_blank">
            <h3 className="card-title">Show Local Weather</h3>
            <img className="card-image" src={weather} alt="" />
          </a>
          <a className="card" href="https://wikipediaviewer123.netlify.app/" target="_blank">
            <h3 className="card-title">Wikipedia Viewer</h3>
            <img className="card-image" src={wiki} alt="" />
          </a>
          <a className="card" href="https://javascriptcalculator123.netlify.app/" target="_blank">
            <h3 className="card-title">Javascript Calculator</h3>
            <img className="card-image" src={calculator} alt="" />
          </a>
          <a className="card" href="https://drum-machine123.netlify.app/" target="_blank">
            <h3 className="card-title">Drum Machine</h3>
            <img className="card-image" src={drum} alt="" />
          </a>
          <a className="card" href="https://codepen.io/Ericko-Marlin/pen/MYerRVd" target="_blank">
            <h3 className="card-title">Pomodoro Clock</h3>
            <img className="card-image" src={pomodoro} alt="" />
          </a>
        </div>
      </div>

      <div id="page3-skills">
        <h2 className="skill-title">SKILL</h2>
        <p className="skill-description">List Of My Skills</p>
        <div className="front-end-container">
          <p className="skill-subtitle">Front End</p>
          <ul>
            <li className="skill fe">HTML</li>
            <li className="skill fe">CSS</li>
            <li className="skill fe">Javascript</li>
            <li className="skill fe">React</li>
          </ul>
        </div>
        <div className="design-container">
          <p className="skill-subtitle">Design</p>
          <ul>
            <li className="skill ed">Canva</li>
            <li className="skill ed">CapCut</li>
          </ul>
        </div>
        <div className="management-container">
          <p className="skill-subtitle">Management</p>
          <ul>
            <li className="skill mg">Scheduling</li>
            <li className="skill mg">Costing</li>
            <li className="skill mg">QA</li>
          </ul>
        </div>
      </div>

      <div id="page4-faq">
        <div>
          <p className="bio">
            Hi everyone, my name is <span> Erick</span> !
            <br />
            Thank you for visiting my portfolio. I started my journey in learning web development in 2025 and I really have interest in web development world. You can see my projects here in my portfolio which I will update regularly. Hope
            through this portfolio, you can know me further. Stay connected!
          </p>
        </div>
        <div className="faq">
          <div className="question1">
            <FaqToggle1 />
            <p className="question">What tech stack are you using for this website?</p>
            <p className="answer">I use HTML, CSS, Javascript, and React</p>
          </div>
          <div className="question2">
            <FaqToggle2 />
            <p className="question">Do you vibe-code this website?</p>
            <p className="answer">No</p>
          </div>
          <div className="question3">
            <FaqToggle3 />
            <p className="question">What is your education background?</p>
            <p className="answer">I graduated from Civil Engineering. I learn web development from Freecodecamp</p>
          </div>
          <div className="question4">
            <FaqToggle4 />
            <p className="question">Why do you switch career?</p>
            <p className="answer">I have big interest in tech industry especially web programming.</p>
          </div>
          <div className="question5">
            <FaqToggle5 />
            <p className="question">What contribution do you think you can provide?</p>
            <p className="answer">I specialize in developing interactive and responsive web designs.</p>
          </div>
        </div>
      </div>

      <div id="page5-stay-connected">
        <h2 className="stay-connected">Stay Connected</h2>
        <p>If you are interested in hiring me, feel free to reach out</p>
        <div className="social-media-container">
          <a className="contact-link" href="#page5-stay-connected">
            <div className="email box">
              <EmailToggle />
            </div>
          </a>

          <a className="contact-link" href="https://wa.me/+6285692533411?" target="_blank">
            <div className="whatsapp box">
              <FaWhatsapp className="icon" />
              <p className="social-media-name">Whatsapp</p>
            </div>
          </a>

          <a className="contact-link" href="https://www.linkedin.com/in/ericko-marlin-3615387a/" target="_blank">
            <div className="linkedin box">
              <FaLinkedinIn className="icon" />
              <p className="social-media-name">Linkedin</p>
            </div>
          </a>

          <a className="contact-link" href="https://www.facebook.com/ericko.marlin/" target="_blank">
            <div className="facebook box">
              <FaFacebookF className="icon" />
              <p className="social-media-name">Facebook</p>
            </div>
          </a>

          <a className="contact-link" href="https://www.instagram.com/ericko.marlin/" target="_blank">
            <div className="instagram box">
              <FaInstagram className="icon" />
              <p className="social-media-name">Instagram</p>
            </div>
          </a>

          <a className="contact-link" href="https://github.com/erickomarlin" target="_blank">
            <div className="github box">
              <FaGithub className="icon" />
              <p className="social-media-name">Github</p>
            </div>
          </a>
        </div>
        <footer>
          <p>
            <span>Erick</span>
          </p>
          <p>Front End Developer | 2025 | Indonesia</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
