import React from 'react';
import Header from '../components/header';

export default class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <h1>Teste favorites - Ok</h1>
      </div>
    );
  }
}
