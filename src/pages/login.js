import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './loading';

export default class Login extends React.Component {
  state = {
    disabledButton: true,
    userName: '',
    menssage: false,
  };

  pageLogin = (element) => {
    const MIN_OF_CARACT = 3;
    this.setState({ userName: element.target.value });
    return (
      element.target.value.length >= MIN_OF_CARACT
        ? this.setState({ disabledButton: false })
        : this.setState({ disabledButton: true })
    );
  };

  log_in = async () => {
    const { userName } = this.state;
    const { history } = this.props;
    this.setState({ menssage: true });
    await createUser({ name: userName });
    this.setState({ menssage: false });
    history.push('/search');
    console.log(typeof history);
  };

  render() {
    const { disabledButton, userName, menssage } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="nome">
            <input
              type="text"
              name="nome"
              id="nome"
              data-testid="login-name-input"
              value={ userName }
              onChange={ this.pageLogin }
            />
            <button
              type="button"
              onClick={ this.log_in }
              disabled={ disabledButton }
              data-testid="login-submit-button"
            >
              Entrar
            </button>
            { menssage ? <Loading /> : null }
          </label>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
