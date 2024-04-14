import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './GameContext';
import styles from "./Board.module.css";
import PlayingCard from "./Card.tsx"
import PlayingJoker from "./Joker.tsx"
import { actionType } from "./types.tsx"
import useLocalStorage from './useLocalStorage';
import { Jokers } from "./Data.tsx"
import { Card, CardNumber, CardType, Joker, SpecialCardEffect, Condition, Combo, Enemy } from './types';

export const Rewards = () => {
    const { state, dispatch } = useContext(GameContext);
    const [storedJokers, setStoredJokers] = useLocalStorage<Joker[]>("jokers", []);

    const availableJokers = () => {
        const valid = Jokers.filter(joker => !state.player.jokers.includes(joker) && !storedJokers.includes(joker));
        return valid;
    }

    const getRandomJokers = () => {
        const jokers = availableJokers();
        const shuffledJokers = jokers.sort(() => 0.5 - Math.random());
        return shuffledJokers.slice(0, 2);
    }
    
    const [randomJokers, setRandomJokers] = useState<Joker[]>([]);
    
    useEffect(() => {
        if (1 <= 0) { // Pokud je zdraví nepřítele menší nebo rovno nule, ulož jokery
            setStoredJokers([...storedJokers, ...randomJokers]);
        }
    }, [state.enemy.score <= 0]);

    useEffect(() => {
        setRandomJokers(getRandomJokers());
    }, []);

    return (
        <div>
            {randomJokers.slice(-2).map((joker, index) => (
                <div key={index}>{joker.id}</div> 
            ))}
        </div>
    );
}

export default Rewards;