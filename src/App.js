import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default App;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {navToggleOn: false};
    this.openNav = this.openNav.bind(this);
  }

  openNav() {
    this.setState(prevState => ({
      isToggleOn: !prevState.navToggleOn
    }));
  }

  render() {
    return (
      <header className="grid--sml header">
        <Logo />
        <Navbtn onClick={this.openNav} />
        <Nav toggle={this.state.navToggleOn}/>
      </header>
    )
  }
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
        {name: "Pontact", title: "My contact", link: "#contact", classes: this.navLinkClasses},
      ],
      
    };
  }

  componentDidMount() {
    if(this.state.navToggleOn) {
      this.setState({
        navClasses: "nav grid__column--sml--10 open",
      });
    }
  }

  render() {
    return (
      <nav className={this.state.navClasses}>
        <ul className="nav__section">
          {this.state.navLinks.map(link => <NavLink key={link.link} link={link}/> )}
        </ul>
      </nav>
    )
  }
}

const Logo = props => {
  return <div className="header__logo grid__column--sml--1 grid__column--mdm--1">ML</div>;
}

const Navbtn = props => {
  return <div className="nav__btn"> <div className="nav__btn__ico"></div> </div>;
}

const NavLink = props => {
  return (
    <li className="nav__item">
      <a className="nav__link" href={props.link.link} title={props.link.title}>
        {props.link.name}
      </a>
    </li>
  );
}