import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import styles from "./Board.module.css";

const Board: React.FC = () => {
    //const { state, dispatch } = useContext(GameContext);

    

    return (
        <div className={styles.board}>
           <div className={styles.sidepanel}>

           </div>
           <div className={styles.card_box}>

           </div>
        </div>
    );
};

export default Board;