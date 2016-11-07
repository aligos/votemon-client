import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function PokemonUpvoter({ mutate, pokemonId }) {
  return (
    <div className='poke-vote' onClick={() => mutate({ variables: { pokemonId }})}>
      <img src='http://i.imgur.com/ZmFD1Bq.png' className="poke-ball" alt='poke-ball'/>
    </div>
  )
}

// You can also use `graphql` for GraphQL mutations
export default graphql(gql`
  mutation upvotePokemon($pokemonId: Int!) {
    upvotePokemon(pokemonId: $pokemonId) {
      id
      votes
    }
  }
`)(PokemonUpvoter);
