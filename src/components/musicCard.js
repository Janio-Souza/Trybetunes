import React from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends React.Component {
  state = {
    todasMusicas: [],
  };

  componentDidMount() {
    const { musics } = this.props;
    this.setState({ todasMusicas: musics });
  }

  render() {
    const { todasMusicas } = this.state;
    console.log('log state', todasMusicas);
    return (
      <div>
        <p>
          { todasMusicas.trackName }
        </p>
        <audio data-testid="audio-component" src={ todasMusicas.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.shape().isRequired,
};
