import React from 'react'

import './card.styles.css'

export const Card = props => (

    
    <div className="card-container">
        <img alt="ninja" src={`https://robohash.org/${props.ninja.id}?set=set3&size=160x160`}/>
        <p > { props.ninja.id } </p>  
        <p > { props.ninja.name } </p>  
    </div>
)