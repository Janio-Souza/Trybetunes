import React from 'react';
import * as Mui from '@mui/material';

export default class Loading extends React.Component {
  render() {
    return (
      // <p id="loading">Carregando...</p>
      <Mui.Box id="loading" sx={ { display: 'flex' } }>
        <Mui.CircularProgress />
      </Mui.Box>
    );
  }
}
