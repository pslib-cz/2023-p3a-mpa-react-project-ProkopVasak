import React from 'react';
import { actionType, Card as CardType } from './types';
import styles from "./Card.module.css";
import { useContext } from 'react';
import { GameContext } from './GameContext';

interface CardProps {
    card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
    const { state, dispatch } = useContext(GameContext);
    const isSelected = state.selectedCards.some(selectedCard => selectedCard.id === card.id);

    
      const toggleCardSelection = (card: CardType) => {
        dispatch({ type: actionType.TOGGLE_CARD_SELECTION, card });
    };

    if (!isSelected){
        return (
            <div className={styles.card} onClick={() => toggleCardSelection(card)}>
                <img className={styles.card__img} src={card.UrlImg} alt="Card" />
            </div>
       );}
    
    if (isSelected){
        return (
            <div className={styles.selected} onClick={() => toggleCardSelection(card)}>
                <img className={styles.card__img} src={card.UrlImg} alt="Card" />
            </div>
        );
    }
    
}
export default Card;

