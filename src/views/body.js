import React, { Component } from 'react';

class Body extends Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {
    return(
      <main className="grid content">
        <Me />
        <Skills />
        <Education />
        <Expereince />
        <Portfolio />
        <Contact />
      </main>
    );
  }
}

const Me = props => {
  return (
    <section className="grid__column--12 content__section content__section--me" id="me"> 
      <div className="content__container">
        <div className="content__item content__item--me__img">
          <img className="content__img" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/17458363_1285902704808196_3145608078731967056_n.jpg?_nc_cat=0&oh=edfeb352801a946716a8939335338038&oe=5BDFE7F2" alt=""/>
        </div>
        <div className="content__item content__item--me bg-white">
          <h1>Matthew LeFevre</h1>
          <div className="content__item--me__text">
            <p className="occupation">Front End Web Developer</p>
            <p className="social-media">
              <a className="facebook" href="www.facebook.com" target="_blank" rel='noreferrer noopener'>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/matthew-lefevre/" target="_blank" rel='noreferrer noopener'>
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="codepen" href="https://codepen.io/MatthewLeFevre/" target="_blank" rel='noreferrer noopener'>
                <i className="fab fa-codepen"></i>
              </a>
              <a className="github" href="https://github.com/matthewLeFevre" target="_blank" rel='noreferrer noopener'>
                <i className="fab fa-github"></i>
              </a>
            </p>
            <ul>
              <li>
                <h4>Location</h4>
                <p>Rexburg, Id</p>
              </li>
              <li>
                <h4>Phone</h4>
                <p>541 714 3099</p>
              </li>
              <li>
                <h4>Web</h4>
                <p>matthew-lefevre.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const Skills = props => {
  return (
    <section className="grid__column--12 content__section content__section--skills" id="skills"> 
      <h2 className="content__section__title">Skills</h2>
      <div className="content__container--skills grid--limited-padded">
        
        <ul className="grid__column--12 grid__column--tiny--4 content__item--skills">
          <li>
            <h3>Tools</h3>
          </li>
          <li>Git
            <span className="skill__tag--good"> 
              <i className="far fa-smile"></i>
            </span>
          </li>
          <li>Photoshop
            <span className="skill__tag--ok">
              <i className="far fa-meh"></i>
            </span>
          </li>
          <li>Illustrator
            <span className="skill__tag--ok">
              <i className="far fa-meh"></i>
            </span>
          </li>
          <li>InDesign
            <span className="skill__tag--learning">
              <i className="fas fa-flask"></i>
            </span>
          </li>
        </ul>
        
        <ul className="grid__column--12 grid__column--tiny--4 content__item--skills">
          <li>
            <h3>Front End</h3>
          </li>
          <li>HTML/CSS
            <span className="skill__tag--good"> 
              <i className="far fa-smile"></i>
            </span>
          </li>
          <li>JavaScript
            <span className="skill__tag--good"> 
              <i className="far fa-smile"></i>
            </span>
          </li>
          <li>Gulp.js
            <span className="skill__tag--ok">
              <i className="far fa-meh"></i>
            </span>
          </li>
          <li>Angular
            <span className="skill__tag--ok">
              <i className="far fa-meh"></i>
            </span>
          </li>
          <li>React
            <span className="skill__tag--learning">
              <i className="fas fa-flask"></i>
            </span>
          </li>
        </ul>
        
        <ul className="grid__column--12 grid__column--tiny--4 content__item--skills">
          <li>
            <h3>Back End</h3>
          </li>
          <li>PHP
            <span className="skill__tag--good"> 
              <i className="far fa-smile"></i>
            </span>
          </li>
          <li>MySQL
            <span className="skill__tag--good"> 
              <i className="far fa-smile"></i>
            </span>
          </li>
          <li>Node.js
            <span className="skill__tag--learning">
              <i className="fas fa-flask"></i>
            </span>
          </li>
          <li>MongoDB
            <span className="skill__tag--learning">
              <i className="fas fa-flask"></i>
            </span>
          </li>
        </ul>
        
        <aside className="grid__column--12 skill__legend">
          <span>
            <i className="fas fa-flask"></i>
            Learning
          </span>
          <span>
            <i className="far fa-meh"></i>
            Ok
          </span>
          <span>
            <i className="far fa-smile"></i>
            Good
          </span>
        </aside>
      </div>
    </section>
  );
}

const Education = props => {
  return (
    <section className="grid__column--12 content__section content__section--education" id="education"> 
      <h2 className="content__section__title">
        Education</h2>
      <div className="content__container--education">
        
        <article className="display__item">
          <h3 className="display__status">Pursuing a Degree in Web Development</h3>
          <div className="display__details">
            <span className="display__source">Brigham Young University-Idaho</span>
            <span className="display__date">Jan 2016 - Jul 2019</span>
          </div>
        </article>
        
        <article className="display__item">
          <h3 className="display__status">Actively Engaged in Self-Learning</h3>
          <div className="display__details">
            <span className="display__source">YouTube, Udemy, SitePoint Premium</span>
            <span className="display__date">Jan 2016 - Present</span>
          </div>
          <hr />
          <h4 className="display__cert">Certificates:</h4>
          <ul className="display__cert__list">
            <li>
              <a className="display__cert__link" href="https://www.sitepoint.com/premium/cert/5b70b8ffa4a40179">Git It Together: Master Version Control with Git and GitHub</a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

const Expereince = props => {
  return (
    <section className="grid__column--12 content__section content__section--expereince" id="expereince"> 
      <h2 className="content__section__title">Experience</h2>
      <div className="content__container--expereince">
        
        <article className="display__item">
          <h3 className="display__status">Creator</h3>
          <div className="display__details">
            <span className="display__source">Blue Rim Design</span>
            <span className="display__date">Jan 2018 - Present</span>
          </div>
          <hr/>
          <a href="http://bluerimdesign.com" className="display__cert__link">http://bluerimdesign.com</a>
        </article>
        
        <article className="display__item">
          <h3 className="display__status">Web Specialist</h3>
          <div className="display__details">
            <span className="display__source">Brigham Young University - Idaho</span>
            <span className="display__date">Dec 2017 - Present</span>
            <hr/>
            <p className="display__text">Provided Web Design & Development services to the Student Records administrative office by:</p>
            <ol className="display__list">
              <li>Managing and maintaining affiliated webpages through the Ingeniux CMS and page builder.</li>
              <li>Conducted a project managerial role over the redesign of the transfer evaluation web page.</li>
              <li>Communicated with other University departments to maintain style guide, code standards and ADA compliance.</li>
              <li>Worked efficiently with supervisors and employees to build a better web experience for students and full time staff.</li>
            </ol>
          </div>
        </article>
        
        <article className="display__item">
          <h3 className="display__status">Web Development Intern</h3>
          <div className="display__details">
            <span className="display__source">The Church of Jesus Christ of Latter-day Saints</span>
            <span className="display__date">Aug 2017 - Dec 2017</span>
            <hr/>
            <p className="display__text">Completed Quality assurance testing for initial products to be released to assist in file security for executive Church Leadership.</p>
            <p className="display__text">Completed Quality assurance testing for a property evaluation software product used to determine ideal geographical locations for new meeting houses.</p>
            <p className="display__text">Completed a visual redesign of the Family History intranet blog. Used front end web technologies including HTML, CSS, and JavaScript. Interacted with the SharePoint rest API in order to build upon the Microsoft SharePoint platform.</p>
          </div>
        </article>
        
      </div>
    </section>
  );
}

const Portfolio = props => {
  return (
    <section className="grid__column--12 content__section content__section--portfolio" id="portfolio"> 
      <h2 className="content__section__title">Portfolio</h2>
      <div className="content__container--portfolio panel__grid">
        
        <a href="http://acdrugfree.org/" className="panel--basic bg-white" target="_blank" rel="noopener noreferrer">
          <div className="panel--img--wrap">
            <img src="http://acdrugfree.org/images/acdfa-logo.jpg" alt="" className="panel--img" />
          </div>
          <div className="panel--caption">
            <h3 className="panel--title">ACDrugFree.org</h3>
            <h4 className="display__source">Full Stack App</h4>
            <span className="panel--author">July 2017</span>
            <p>First ever freelance project for Apache County Arizona.</p>
          </div>
        </a>
        
        <a href="http://bluerimdesign.com/" className="panel--basic bg-white" target="_blank" rel="noopener noreferrer">
          <div className="panel--img--wrap">
            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p200x200/27541072_403182856772213_4162487030002740207_n.png?_nc_cat=0&oh=b60c0838e56c2c220a101a757ebcf31b&oe=5BECA2A8" alt="" className="panel--img" />
          </div>
          <div className="panel--caption">
            <h3 className="panel--title">BlueRimDesign.com</h3>
            <h4 className="display__source">Front-End Site</h4>
            <span className="panel--author">March 2018</span>
            <p>Blog and media outlet for myself as a Web Developer.</p>
          </div>
        </a>
        
      </div>
    </section>
  );
}

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      senderName: "",
      emailBody: ""
    }

    this.sendMail = this.sendMail.bind(this);
    this.getBody = this.getBody.bind(this);
    this.getName = this.getName.bind(this);
    
  }

  getName (event) {
    this.setState({
      senderName: event.target.value,
      emailSubject: "Hello from " + this.state.senderName
    })
  }

  getBody (event) {
    this.setState({
      emailBody: event.target.value
    })
  }

  sendMail (event) {
    console.log(this.state);
    event.preventDefault();
    window.open('mailto:matthewlefevre95@gmail.com?subject=' + this.state.emailSubject + '&body=' + this.state.emailBody);
  }

  render() {
    return (
      <section className="grid__column--12 content__section content__section--contact" id="contact"> 
        <h2 className="content__section__title">Contact</h2>
        <div className="content__container--contact">
          <form className="form" onSubmit={this.sendMail}>	
            <label className="form__label top txt-white mod" htmlFor="contact-email">Name</label>
            <input value={this.state.senderName} onChange={this.getName}  className="form__field"  id="contact-email" type="text" required />
            <label  className="form__label top txt-white mod" htmlFor="contact-message">Message</label>
            <textarea value={this.state.emailBody} onChange={this.getBody} className="form__field" id="contact-message" cols="30" rows="10" />
            <button className="btn btn-purple" type="submit">Send</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Body;