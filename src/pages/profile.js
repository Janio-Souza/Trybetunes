import React from 'react';
import Header from '../components/header';

export default class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <h1>Teste Profile - Ok</h1>
      </div>
    );
  }
}
