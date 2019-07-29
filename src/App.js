import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'  
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    // If offline application still works
    // as i have made it fail gracefully
    this.state = {
      ninjas:[
        {
          name: 'Shia Affaed',
          id: 1
        },
        {
          name: 'Leroy Jenkins',
          id: 2
        },
        {
          name: 'Kurtis Weissnax',
          id: 3
        },
        {
          name: 'Ninja Mcgee',
          id: 4
        },
      ],
      searchField: '',
      pokemonList: []
    }
    
  }

  componentDidMount() {
    let pokeapi = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
    fetch(pokeapi)
    .then(response => response.json())
    .then(data => this.setState({pokemonList: data.results}) )
  }

  render() {
    const { pokemonList, searchField} = this.state;
   
    const filterPokemon = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Original 151 Pokedex</h1>
        <SearchBox 
          placeholder="Search Kanto Pokemon"
          handleChange={ e =>
            this.setState({searchField: e.target.value})
          }
        />
        <CardList pokemonList={filterPokemon}/>
        
      </div>
    );
  }
}

export default App;
