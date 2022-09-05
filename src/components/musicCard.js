import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/loading';

export default class MusicCard extends React.Component {
  state = {
    allMusics: [],
    menssage: false,
    favorites: [],
  };

  componentDidMount() {
    const { musics } = this.props;
    this.setState({ allMusics: musics });
  }

  favorite = async (checkboxs) => {
    const { allMusics } = this.state;
    if (checkboxs.target.checked === true) {
      console.log(checkboxs.target.id);
      this.setState({ menssage: true });
      this.setState(
        (prev) => ({ favorites: [...prev.favorites, Number(checkboxs.target.id)] }),
      );
      await addSong(allMusics); // Passabdo a musica favoritada para a função addSong.
      this.setState({ menssage: false });
    } else {
      console.log('Desmarcou');
    }
  };

  render() {
    const { allMusics, menssage, favorites } = this.state;
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
                  Favoritar
                  <input
                    type="checkbox"
                    id={ allMusics.trackId }
                    checked={ favorites.includes(allMusics.trackId) }
                    onChange={ this.favorite }
                  />
                </label>
              </div>)
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.shape().isRequired,
};
