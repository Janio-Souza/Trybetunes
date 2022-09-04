import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Albuns extends React.Component {
  render() {
    const { albuns } = this.props;
    return (
      <div>
        <ul>
          <li>
            <img src={ albuns.artworkUrl100 } alt="album" />
            { albuns.artistId }
            { albuns.artistName }
            { albuns.collectionId }
            { albuns.collectionName }
            { albuns.collectionPrice }
            { albuns.releaseDate }
            { albuns.trackCount }
            <Link
              to={ `/album/${albuns.collectionId}` }
              data-testid={ `link-to-album-${albuns.collectionId}` }
            >
              Escutar
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

Albuns.propTypes = {
  albuns: PropTypes.shape().isRequired,
};
