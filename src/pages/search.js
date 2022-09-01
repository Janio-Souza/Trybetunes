import React from 'react';
import Header from '../components/header';

export default class Search extends React.Component {
  state = {
    disabledSearch: true,
    searchMusic: '',
  };

  searc_Btn = (element) => {
    const MIN_OF_CARACT = 2;
    this.setState({ searchMusic: element.target.value });
    return (
      element.target.value.length >= MIN_OF_CARACT
        ? this.setState({ disabledSearch: false })
        : this.setState({ disabledSearch: true })
    );
  };

  render() {
    const { disabledSearch, searchMusic } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search">
            <input
              type="text"
              name="search"
              data-testid="search-artist-input"
              value={ searchMusic }
              onChange={ this.searc_Btn }
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ disabledSearch }
            >
              Pesquisar
            </button>
          </label>
        </form>
      </div>
    );
  }
}
