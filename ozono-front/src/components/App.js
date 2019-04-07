import React, { Component } from 'react'
import './App.css'
import client from '../utils/Client'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login'
import SearchService from './SearchService'
import SearchUser from './SearchUser'
import CreateService from './CreateService'
import CreateUser from './CreateUser'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Route exact path='/' component={() => <div></div>} />
          <Route exact path='/service' component={() => <SearchService client={client} />} />
          <Route exact path='/service/create' component={() => <CreateService client={client} />} />
          <Route exact path='/user' component={() => <SearchUser client={client} />} />
          <Route exact path='/user/create' component={() => <CreateUser client={client} />} />
        </ApolloProvider >
      </BrowserRouter >
    );
  }
}

export default App
