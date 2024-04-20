import { Player, Enemy, Card, Joker as JokerType, State, Action, CardNumber, Combo, actionType } from './types';
import styles from "./Joker.module.css";
import { GameContext } from './GameContext';
import React, { useContext, useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface JokerProps {
    joker: JokerType;
    isDragging: boolean;
}

const Joker: React.FC<JokerProps> = ({ joker, isDragging  }) => {

    const { dispatch } = useContext(GameContext);

    const handleRemoveJoker = (jokerId: number) => {
        dispatch({ type: actionType.REMOVE_JOKER_FROM_PLAYER, jokerId });
    };

    return (
        <>
        <div
            style={{
                cursor: 'grab',  // Změna kurzoru
                opacity: isDragging ? 0.5 : 1,  // Změna průhlednosti během dragování
                boxShadow: isDragging ? '0 0 10px rgba(0,0,0,0.5)' : 'none'  // Přidání stínu
            }}
            >
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