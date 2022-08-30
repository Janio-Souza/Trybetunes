import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Pages from './pages/pages';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Pages />
      </BrowserRouter>
    );
  }
}

export default App;
