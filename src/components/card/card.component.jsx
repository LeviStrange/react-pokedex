import React from 'react'

import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <img alt="ninja" src={`https://robohash.org/${props.ninja.id}?set=set2&size=150x150`}/>
        <p > { props.ninja.id } </p>  
        <p > { props.ninja.name } </p>  
    </div>
)