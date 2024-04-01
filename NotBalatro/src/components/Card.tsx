import React from 'react';
import { Card as CardType } from './types';
import styles from "./Card.module.css";
import { useContext } from 'react';
import { GameContext } from './GameContext';

interface CardProps {
    card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
    const { selectedCards,  setSelectedCards } = useContext(GameContext);

    const handleClick = () => {
        if (selectedCards.includes(card)) {
          setSelectedCards(selectedCards.filter(c => c.id !== card.id));
        } else if (selectedCards.length < 5) {
          setSelectedCards([...selectedCards, card]);
        }
      };

    return (
        <div className={styles.card} onClick={handleClick}>
            <img className={styles.card__img} src={card.UrlImg} alt="card" />
        </div>
        
        
    
);}

export default Card;