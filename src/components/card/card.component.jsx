import React from 'react'

import './card.styles.css'

export const Card = props => (
    
    <div className="card-container">
        <img alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.dexNum}.png`}/>
        <p > { props.pokemon.name } </p>  
        <p><a href={ props.pokemon.url }> Read more </a></p>
    </div>
)