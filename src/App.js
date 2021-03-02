import React, { Component } from 'react';
import { Route } from 'react-router';
import { MainLayout } from './components/mainComponents/MainLayout';
import { Backyard } from './pages/Backyard';
import { Home } from './pages/Home';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <MainLayout>
        <Route exact path='/' component={Home} />
        <Route path='/backyard' component={Backyard} />
      </MainLayout>
    );
  }
}
