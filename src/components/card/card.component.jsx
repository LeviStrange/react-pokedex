import React from 'react'

import './card.styles.css'

export const Card = props => (
    
    <div className="card-container">
        <img className="pokeimg" alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.url.split('/')[6]}.png`}/>
        <p className="pokename"> { props.pokemon.name } </p>  
        <p><a href={ props.pokemon.url }> Read more </a></p>
    </div>
)