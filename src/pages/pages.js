import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './album';
import Favorites from './favorites';
import Login from './login';
import NotFound from './NotFound';
import Profile from './profile';
import ProfileEdite from './profileEdit';
import Search from './search';

export default class Pages extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdite } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}
