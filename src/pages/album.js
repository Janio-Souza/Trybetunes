import React from 'react';
import Header from '../components/header';

// /album/:id

export default class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <h1>Teste album - Ok</h1>
      </div>
    );
  }
}
