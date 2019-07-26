import React from 'react'

import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <img alt="ninja" src={`https://robohash.org/${props.i}?set=set2&size=150x150`}/>
        <p > { props.pokemon.name } </p>  
    </div>
)