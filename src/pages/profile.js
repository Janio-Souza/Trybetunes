import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Header from '../components/header';
import Loading from './loading';

export default class Profile extends React.Component {
  state = {
    menssage: true,
    userProfile: {},
  };

  async componentDidMount() {
    const userProfile = await getUser();
    this.setState({ userProfile, menssage: false });
    console.log(userProfile); // Console log
  }

  render() {
    const { menssage, userProfile } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        { menssage ? <Loading />
          : (
            <div className="profileContainer">
              <img
                src={ userProfile.image }
                alt="User"
                width="200"
                height="200"
              />
              <h3>Nome</h3>
              { userProfile.name }
              <h3>E-mail</h3>
              { userProfile.email }
              <h3>Descrição</h3>
              { userProfile.description }
              <Link to="/profile/edit">Editar perfil</Link>
            </div>)}
      </div>
    );
  }
}
