import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Pages from './pages/pages';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <p>MusicTunes</p> */}
        {/* <img src="MusicLogo.png" alt="logo" height="40px" /> */}
        <Pages />
      </BrowserRouter>
    );
  }
}

export default App;
