import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import PokemonUpvoter from './PokemonUpvoter';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and pokemons when it is ready
function PokemonList({ data: { loading, pokemons } }) {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        {pokemons.sort((x, y) => y.votes - x.votes).map(pokemon =>
          <li key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name} />
            {pokemon.name} Type: {' '}
            {pokemon.type.title} {' '}
            <span>({pokemon.votes} votes)</span>

            <PokemonUpvoter pokemonId={pokemon.id} />
          </li>
        )}
      </ul>
    );
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PokemonList here)
export default graphql(gql`
  query allPokemons {
    pokemons {
      id
      name
      votes
      image
      type {
        id
        title
      }
    }
  }
`)(PokemonList);
