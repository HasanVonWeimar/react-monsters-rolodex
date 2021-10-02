import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

//the card-list component displays the cards in a grid pattern

export const CardList = props => {

return <div className='card-list'>  {
    //send each monster from the props we get from app, to the card component
    props.monsters.map(
      monster => (<Card key={monster.id} monster={monster} />)
      )
  }
</div>;
}