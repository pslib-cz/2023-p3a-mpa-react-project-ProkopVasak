import React from 'react';
import { Card as CardType } from './types';
import styles from "./Card.module.css";

interface CardProps {
    card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <div className={styles.card}>
            <img className={styles.card__img} src={card.UrlImg} alt="card" />
        </div>
        
        
    
);}

export default Card;