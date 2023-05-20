import React from 'react';
import * as Mui from '@mui/material';
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
  };

  render() {
    const { disabledButton, userName, menssage } = this.state;
    return (
      <div data-testid="page-login">
        <Mui.Box
          component="form"
          noValidate
          sx={ {
            marginTop: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <img src="MusicLogo-fd-bc.png" alt="logo" height="" />
          <form>
            <label htmlFor="nome">
              <Mui.TextField
                margin="normal"
                required
                fullWidth
                placeholder="Insira seu nome"
                autoFocus
                size="small"
                type="text"
                name="nome"
                id="nome"
                data-testid="login-name-input"
                value={ userName }
                onChange={ this.pageLogin }
              />
              <Mui.Button
                fullWidth
                variant="contained"
                sx={ { mt: 3, mb: 2 } }
                size="small"
                type="button"
                onClick={ this.log_in }
                disabled={ disabledButton }
                data-testid="login-submit-button"
              >
                Entrar
              </Mui.Button>
              {menssage ? <Loading /> : null}
            </label>
          </form>
        </Mui.Box>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
