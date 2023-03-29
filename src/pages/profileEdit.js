import React from 'react';
import { Redirect } from 'react-router-dom';
import { getUser, updateUser } from '../services/userAPI';
import Header from '../components/header';
import Loading from './loading';

export default class editeName extends React.Component {
  state = {
    menssage: true,
    btn: false,
    image: '',
    name: '',
    email: '',
    description: '',
    redirect: false,
  };

  async componentDidMount() {
    const userProfile = await getUser();
    console.log('log retor', userProfile);
    this.setState({
      name: userProfile.name,
      image: userProfile.image,
      email: userProfile.email,
      description: userProfile.description,
      menssage: false });
  }

  // validationBtn = (input) => {
  //   const name = input.target.value.value <= 3;
  //   validated = name;
  //   this.setState({ btn: validated });
  // };

  editeProfile = (input) => {
    if (input.target.name === 'image') {
      this.setState({ image: input.target.value });
    }
    if (input.target.name === 'name') {
      this.setState({ name: input.target.value });
    }
    if (input.target.name === 'email') {
      this.setState({ email: input.target.value });
    }
    if (input.target.name === 'description') {
      this.setState({ description: input.target.value });
    }
    // const name = input.target.value <= 3;
    // const validated = name;
    // this.setState({ btn: validated });
  };

  save = () => {
    const { image, email, name, description } = this.state;
    updateUser({ image, email, name, description });
    console.log('Redirecionou');
    this.setState({ redirect: true });
  };

  render() {
    const { menssage, btn, name, image, email, description, redirect } = this.state;
    return (
      <div data-testid="page-profile-edit">
        { menssage
          ? <Loading /> : (
            <div>
              <Header />
              <form>
                <label
                  htmlFor="image"
                >
                  Imagem:
                  <input
                    type="text"
                    data-testid="edit-input-image"
                    name="image"
                    onChange={ this.editeProfile }
                    placeholder="Link para imagem"
                    value={ image }
                  />
                </label>
                <label htmlFor="name">
                  Nome:
                  <input
                    type="text"
                    data-testid="edit-input-name"
                    name="name"
                    onChange={ this.editeProfile }
                    placeholder="Digite seu nome"
                    value={ name }
                  />
                </label>
                <label htmlFor="email">
                  E-mail:
                  <input
                    type="email"
                    data-testid="edit-input-email"
                    name="email"
                    onChange={ this.editeProfile }
                    placeholder="Digite seu E-mail"
                    value={ email }
                  />
                </label>
                <label
                  htmlFor="description"
                >
                  Breve descrição:
                  <textarea
                    name="description"
                    rows="5"
                    cols="33"
                    data-testid="edit-input-description"
                    onChange={ this.editeProfile }
                    placeholder="Digite aqui"
                    value={ description }
                  />
                </label>
                <label htmlFor="salvar">
                  <input
                    type="button"
                    data-testid="edit-button-save"
                    name="salvar"
                    value="Salvar"
                    onClick={ this.save }
                    disabled={ btn }
                  />
                </label>
              </form>
              { redirect ? <Redirect to="/profile" /> : null }
            </div>) }
      </div>
    );
  }
}
