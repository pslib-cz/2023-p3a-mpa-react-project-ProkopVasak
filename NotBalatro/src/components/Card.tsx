import React from 'react';
import { actionType, Card as CardType } from './types';
import styles from "./Card.module.css";
import { useContext } from 'react';
import { GameContext } from './GameContext';

interface CardProps {
    card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
    const { selectedCards, dispatch } = useContext(GameContext);
    const isSelected = selectedCards.includes(card);
    
      const toggleCardSelection = (card: CardType) => {
        dispatch({ type: actionType.TOGGLE_CARD_SELECTION, card });
    };

    return (
        <div className={`${styles.card} ${isSelected ? styles.selected : ''}`} onClick={() => toggleCardSelection(card)}>
            
            <div className={styles.card__img} style={{
                backgroundImage: "url(" + card.UrlImg + ")",
            }}>.</div>
        </div>
        
        
    
);}

export default Card;

