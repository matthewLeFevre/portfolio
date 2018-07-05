import React, { Component } from 'react';
import Body from './views/body';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {navToggleOn: true};
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState(prevState => ({
      navToggleOn: !prevState.navToggleOn
    }));
  }

  // To listen for the click on the hamburger menu we need to 
  // keep the change of state function (openNav) in the parent
  // and pass that funciton(this.openNav) to the child as a prop
  // Then in the child we need to call that function it will change
  // the state of the parent 
  render() {
    return (
      <header className="grid--sml header">
        <Logo />
        <Navbtn toggleNav={this.toggleNav} />
        <Nav toggleNav={this.toggleNav}  navToggleOn={this.state.navToggleOn}/>
      </header>
    )
  }
}

const Logo = props => {
  return <div className="header__logo grid__column--sml--1 grid__column--mdm--1">ML</div>;
}

const Navbtn = props => {
  return <div onClick={props.toggleNav} className="nav__btn"> <div className="nav__btn__ico"></div> </div>;
}

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navToggleOn: this.props.navToggleOn,
      navClasses: "nav grid__column--sml--10",
      navLinks: [
        {name: "Me", title: "My information", link: "#me", classes: this.navLinkClasses},
        {name: "Skills", title: "My Skills", link: "#skills", classes: this.navLinkClasses},
        {name: "Education", title: "My education", link: "#education", classes: this.navLinkClasses},
        {name: "Expereince", title: "My expereince", link: "#expereince", classes: this.navLinkClasses},
        {name: "Portfolio", title: "My portfolio", link: "#portfolio", classes: this.navLinkClasses},
        {name: "Contact", title: "My contact", link: "#contact", classes: this.navLinkClasses},
      ],
    };
  }

  // When we change the state of an element based on incoming props
  // we need this lifecycle function
  componentWillReceiveProps(nextProps) {
    this.setState({
      navToggleOn: nextProps.navToggleOn,
    });
    if(this.state.navToggleOn) {
      this.setState({
        navClasses: "nav grid__column--sml--10 open",
      });
    } else {
      this.setState({
        navClasses: "nav grid__column--sml--10",
      })
    }
  }

  render() {
    return (
      <nav className={this.state.navClasses}>
        <ul className="nav__section">
          {this.state.navLinks.map(link => <NavLink toggleNav={this.props.toggleNav} key={link.link} link={link}/> )}
        </ul>
      </nav>
    )
  }
}

const NavLink = props => {
  return (
    <li onClick={props.toggleNav} className="nav__item">
      <a className="nav__link" href={props.link.link} title={props.link.title}>
        {props.link.name}
      </a>
    </li>
  );
}

export default App;