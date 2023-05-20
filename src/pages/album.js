import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/musicCard';

// /album/:id

export default class Album extends React.Component {
  state = {
    musics: [],
    artistName: '',
    collectionName: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id); // Capturando musicas com api
    this.setState({
      musics,
      artistName: musics[0].artistName,
      collectionName: musics[0].collectionName,
    });
  }

  render() {
    const { musics, artistName, collectionName } = this.state;
    return (
      <div>
        <Header />
        <div className="albunBox">
          <h3 data-testid="album-name">
            { collectionName }
          </h3>
          <h3 data-testid="artist-name">
            { artistName }
          </h3>
        </div>
        <div className="albunBox">
          {musics.map((elements, indice) => {
            if (indice !== 0) {
              return <MusicCard key={ elements.trackName } musics={ elements } />;
            }
            return true;
          })}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape().isRequired,
};
