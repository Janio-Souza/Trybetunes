import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/loading';
import '../app.css';

export default class MusicCard extends React.Component {
  state = {
    allMusics: [],
    menssage: false,
    favoritesMusics: [],
  };

  async componentDidMount() {
    const { musics } = this.props;
    const GET_MUSICS = await getFavoriteSongs();
    this.setState({ allMusics: musics, favoritesMusics: GET_MUSICS });
  }

  favorite = async (checkboxs) => {
    const { allMusics } = this.state;
    this.setState({ menssage: true });
    if (checkboxs.target.checked === true) {
      await addSong(allMusics); // Passando a musica favoritada para a função addSong.
      const favoritesNewMusics = await getFavoriteSongs(); // Recupera as musicas favritadas pela função addSong.
      this.setState({ menssage: false, favoritesMusics: favoritesNewMusics });
    } else {
      await removeSong(allMusics); // Removendo musica do localStorage.
      const favoritesMusics = await getFavoriteSongs();
      this.setState({ menssage: false, favoritesMusics });
    }
  };

  render() {
    const { allMusics, menssage, favoritesMusics } = this.state;
    return (
      <div>
        {
          menssage
            ? <Loading />
            : (
              <div>
                <p>
                  { allMusics.trackName }
                </p>
                <audio
                  data-testid="audio-component"
                  src={ allMusics.previewUrl }
                  controls
                >
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  <code>audio</code>
                  .
                </audio>
                <label
                  htmlFor={ allMusics.trackId }
                  data-testid={ `checkbox-music-${allMusics.trackId}` }
                >
                  Favorita
                  <input
                    type="checkbox"
                    id={ allMusics.trackId }
                    checked={ favoritesMusics
                      .some((element) => element.trackId === allMusics.trackId) }
                    onChange={ this.favorite }
                  />
                </label>
              </div>
            )
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.shape().isRequired,
};
