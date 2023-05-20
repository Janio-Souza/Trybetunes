import React from 'react';
import PropTypes from 'prop-types';

export default class Artist extends React.Component {
  render() {
    const { artistName } = this.props;
    return (
      <p className="centerTela">
        Resultado de álbuns de:
        { ` ${artistName}` }
      </p>
    );
  }
}

Artist.propTypes = {
  artistName: PropTypes.string.isRequired,
};
