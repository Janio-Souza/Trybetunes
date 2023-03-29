import React from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Header from '../components/header';
import Loading from './loading';
import MusicCard from '../components/musicCard';

export default class Favorites extends React.Component {
  state = {
    musicsFavorites: [],
    menssage: true,
  };

  async componentDidMount() {
    const musicsFavorites = await getFavoriteSongs();
    this.setState({ menssage: false, musicsFavorites });
  }

  async componentDidUpdate() {
    const musicsFavorites = await getFavoriteSongs();
    this.setState({ musicsFavorites });
  }

  render() {
    const { menssage, musicsFavorites } = this.state;
    return (
      <div data-testid="page-favorites">
        { menssage ? <Loading />
          : (
            <div>
              <Header />
              <h2>Musicas Favoritas</h2>
              { musicsFavorites
                .map((elements) => (
                  <MusicCard key={ elements.trackName } musics={ elements } />)) }
            </div>)}
      </div>
    );
  }
}
