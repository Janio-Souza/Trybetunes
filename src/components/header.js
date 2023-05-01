import React from 'react';
// import * as Mui from '@mui/material';
import '../app.css';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/loading';

export default class Header extends React.Component {
  state = {
    user: '',
    menssage: true,
    link1: 'linksNavBar',
    link2: 'linksNavBar',
    link3: 'linksNavBar',
  };

  async componentDidMount() {
    const getName = await getUser();
    this.setState({
      user: getName.name,
      menssage: false,
    });
  }

  render() {
    const mouseOver = (elem) => {
      const { id } = elem.target;
      switch (id) {
      case 'link1':
        this.setState((prevState) => (
          { ...prevState, link1: 'linksNavBarHover' }
        ));
        break;
      case 'link2':
        this.setState((prevState) => (
          { ...prevState, link2: 'linksNavBarHover' }
        ));
        break;
      default:
        this.setState((prevState) => (
          { ...prevState, link3: 'linksNavBarHover' }
        ));
      }
    };
    const mouseOut = (elem) => {
      const { id } = elem.target;
      switch (id) {
      case 'link1':
        this.setState((prevState) => (
          { ...prevState, link1: 'linksNavBar' }
        ));
        break;
      case 'link2':
        this.setState((prevState) => (
          { ...prevState, link2: 'linksNavBar' }
        ));
        break;
      default:
        this.setState((prevState) => (
          { ...prevState, link3: 'linksNavBar' }
        ));
      }
    };

    const { user, menssage, link1, link2, link3 } = this.state;
    return (
      <header data-testid="header-component">
        <div className="reader">
          <img src="MusicLogo-rem-fd.png" alt="logo" height="40px" />
          {menssage ? <Loading /> : <p id="userName">{user}</p>}
        </div>
        <nav className="navBar">
          <Link
            id="link1"
            onMouseOver={ mouseOver }
            onMouseOut={ mouseOut }
            className={ link1 }
            to="/search"
          >
            Seacher
          </Link>
          <Link
            id="link2"
            onMouseOver={ mouseOver }
            onMouseOut={ mouseOut }
            className={ link2 }
            to="/favorites"
          >
            Favoritas
          </Link>
          <Link
            id="link3"
            onMouseOver={ mouseOver }
            onMouseOut={ mouseOut }
            className={ link3 }
            to="/profile"
          >
            Perfil
          </Link>
        </nav>
      </header>
    );
  }
}
