import React from 'react';
import './card.styles.css';

export const Card = props => (
   
        //we receive each monster in props from cardlist component,
        //then display them in a card here

        <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} />
            <h2> {props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
);


