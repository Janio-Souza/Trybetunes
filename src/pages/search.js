import React from 'react';
import Header from '../components/header';

export default class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <h1>Teste search - Ok</h1>
      </div>
    );
  }
}
