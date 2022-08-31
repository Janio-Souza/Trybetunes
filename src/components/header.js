import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/loading';

export default class Header extends React.Component {
  state = {
    user: '',
    menssage: true,
  };

  async componentDidMount() {
    const getName = await getUser();
    this.setState({
      user: getName.name,
      menssage: false,
    });
  }

  render() {
    const { user, menssage } = this.state;
    return (
      <header data-testid="header-component">
        <nav>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </nav>
        <h1>Header</h1>
        { menssage ? <Loading /> : <p data-testid="header-user-name">{ user }</p> }
      </header>
    );
  }
}
