import React from 'react';
import { actionType, Card as CardType } from './types';
import styles from "./Card.module.css";
import { useContext } from 'react';
import { GameContext } from './GameContext';

interface CardProps {
    card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
    const { selectedCards,  setSelectedCards, dispatch } = useContext(GameContext);
    const isSelected = selectedCards.includes(card);
    
      const toggleCardSelection = (card: CardType) => {
        dispatch({ type: actionType.TOGGLE_CARD_SELECTION, card });
    };

    return (
        <div className={`${styles.card} ${isSelected ? styles.selected : ''}`} onClick={() => toggleCardSelection(card)}>
            <img className={styles.card__img} src={card.UrlImg} alt="card" />
        </div>
        
        
    
);}

export default Card;

