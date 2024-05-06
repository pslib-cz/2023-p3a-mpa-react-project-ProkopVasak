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
                    <div>
                        <img src="./src/images/joker.svg" alt="joker" className={styles.joker__img} />
                        <div>{joker.condition}</div>
                    </div>
                </div>
                <button onClick={() => handleRemoveJoker(joker.id)}>Remove</button>
            </div>
            
            
        </>
        
    );
};

export default Joker;