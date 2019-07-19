import React from 'react';

import { Card } from '../card/card.component' 
import './card-list.styles.css'

export const CardList = props => (
    <div className='card-list'>
        {props.ninjas.map(ninja => (
            <Card key={ ninja.id } ninja={ninja}/> 
        ))}
    </div>
)