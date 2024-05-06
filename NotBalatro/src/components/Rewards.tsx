import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from './GameContext';
import { actionType, Joker } from './types'; // Ujistěte se, že máte správně definované typy
import {Jokers} from "./Data";
import styles from "./Rewards.module.css";
import PlayingJoker from "./Joker.tsx"

const Rewards: React.FC = () => {
    const { state, dispatch } = useContext(GameContext);
    const [availableJokers, setAvailableJokers] = useState<Joker[]>([]);
    const [selectedJokers, setSelectedJokers] = useState<Joker[]>([]);

    const handleSelectJoker = (joker: Joker) => {
        dispatch({ type: actionType.ADD_JOKER_TO_PLAYER, joker });
        dispatch({ type: actionType.CHANGE_REWARDS, rew: false});
    };

    const handleSkipJoker = () => {
        dispatch({ type: actionType.SET_NEXT_ENEMY });
    };

    useEffect(() => {
        const filteredJokers = Jokers.filter(joker =>
            !state.player.jokers.some(playerJoker => playerJoker.id === joker.id)
        );

        const shuffledJokers = filteredJokers.sort(() => 0.5 - Math.random()); // Zamíchání jokerů
        setAvailableJokers(shuffledJokers.slice(0, 2)); // Výběr prvních dvou jokerů po zamíchání
    }, [state.player.jokers]); // Dependence na jokery, které už má hráč


    return (
        <>
            <div className={styles.rewards}>
                <div className={styles.choose__box}>
                    <h2>Select one of the following jokers:</h2>
                    {availableJokers.map(joker => (
                        <div className={styles.joker__btn} key={joker.id} onClick={() => handleSelectJoker(joker)}>
                            {joker.condition}
                        </div>
                    ))}
                    <button onClick={handleSkipJoker}>Skip Joker Selection</button>
                </div>
            </div>
        </>
    );
};

export default Rewards;