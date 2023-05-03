import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../app.css';

export default class Albuns extends React.Component {
  render() {
    const { albuns } = this.props;
    return (
      <div className="albuns">
        <ul>
          <li className="albunDetails">
            { albuns.artistName }
            <img src={ albuns.artworkUrl100 } alt="album" width="140px" />
            {/* { albuns.artistId } */}
            {/* { albuns.collectionId } */}
            { albuns.collectionName }
            { ` R$ ${albuns.collectionPrice.toFixed(2)} ` }
            {/* { albuns.releaseDate } */}
            {/* { albuns.trackCount } */}
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
