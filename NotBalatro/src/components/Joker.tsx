import React from 'react';
import { Player, Enemy, Card, Joker as JokerType, State, Action, CardNumber, Combo } from './types';
import styles from "./Joker.module.css";

interface JokerProps {
    joker: JokerType;
}

const Joker: React.FC<JokerProps> = ({ joker }) => {
    return (
        <div className={styles.joker}>
            <div>Mult: {joker.effectValue}</div>
            <div>Condition: {joker.condition}</div>
        </div>
    );
};

export default Joker;