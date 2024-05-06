import { Player, Enemy, Card, Joker as JokerType, State, Action, CardNumber, Combo, actionType } from './types';
import styles from "./Joker.module.css";
import { GameContext } from './GameContext';
import React, { useContext, useEffect, useState } from 'react';

interface JokerProps {
    joker: JokerType;
}

const Joker: React.FC<JokerProps> = ({ joker}) => {

    const { dispatch } = useContext(GameContext);

    const handleRemoveJoker = (jokerId: number) => {
        dispatch({ type: actionType.REMOVE_JOKER_FROM_PLAYER, jokerId });
    };

    return (
        <>
        <div>
                <div className={styles.joker}>
                    <div>Mult: {joker.effectValue}</div>
                    <div>Condition: {joker.condition}</div>
                </div>
                <button onClick={() => handleRemoveJoker(joker.id)}> </button>
            </div>
            
            
        </>
        
    );
};

export default Joker;