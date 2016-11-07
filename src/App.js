import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import PokemonList from './PokemonList';

class App extends Component {
  constructor(...args) {
    super(...args);

    const networkInterface = createNetworkInterface('http://localhost:8080/graphql');
    this.client = new ApolloClient({
      networkInterface,
      dataIdFromObject: r => r.id,
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <div className="container">
          <PokemonList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
