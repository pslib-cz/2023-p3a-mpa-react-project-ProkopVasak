import { Joker as JokerType, actionType } from './types';
import styles from "./Joker.module.css";
import { GameContext } from './GameContext';
import React, { useContext } from 'react';

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
                        <img src="./images/joker.svg" alt="joker" className={styles.joker__img} />
                        <div>{joker.condition}</div>
                        <button onClick={() => handleRemoveJoker(joker.id)}>Remove</button>
                    </div>
                </div>
                
            </div>
            
            
        </>
        
    );
};

export default Joker;