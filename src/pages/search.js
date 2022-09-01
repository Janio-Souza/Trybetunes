import React from 'react';
import Header from '../components/header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './loading';
import Albuns from '../components/albuns';
import Artist from '../components/artist';

export default class Search extends React.Component {
  state = {
    disabledSearch: true,
    searchAlbuns: '',
    menssage: false,
    albuns: [],
    artistName: '',
    displayName: false,
  };

  search_Input = (element) => {
    const MIN_OF_CARACT = 2;
    this.setState({ searchAlbuns: element.target.value });
    return (
      element.target.value.length >= MIN_OF_CARACT
        ? this.setState({ disabledSearch: false })
        : this.setState({ disabledSearch: true })
    );
  };

  search_Btn = async () => {
    const { searchAlbuns } = this.state;
    this.setState({ menssage: true });
    const apiReturn = await searchAlbumsAPI(searchAlbuns);
    this.setState(
      { artistName: searchAlbuns,
        searchAlbuns: '',
        menssage: false,
        albuns: apiReturn },
      () => apiReturn.length > 0 && this.setState({ displayName: true }),
    );
  };

  render() {
    const {
      disabledSearch,
      searchAlbuns, menssage, albuns, artistName, displayName } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search">
            <input
              type="text"
              name="search"
              data-testid="search-artist-input"
              value={ searchAlbuns }
              onChange={ this.search_Input }
              placeholder="Pesquisar Artista"
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ disabledSearch }
              onClick={ this.search_Btn }
            >
              Pesquisar
            </button>
          </label>
        </form>
        { menssage ? <Loading /> : null }
        { displayName && <Artist artistName={ artistName } /> }
        { albuns.length !== 0
          ? albuns
            .map((element) => <Albuns key={ element.collectionId } albuns={ element } />)
          : <p>Nenhum álbum foi encontrado</p> }
      </div>
    );
  }
}
