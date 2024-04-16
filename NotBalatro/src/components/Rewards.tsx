import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './GameContext';
import useLocalStorage from './useLocalStorage';
import { Joker } from './types';
import { Jokers } from "./Data";

export const Rewards: React.FC = () => {
    const { state } = useContext(GameContext);
    const [storedJokers, setStoredJokers] = useLocalStorage<Joker[]>('jokers', []);

    const availableJokers = () => {
        // Filtrujeme Jokers tak, aby neobsahovali jokery, které hráč již má
        return Jokers.filter(joker => 
            !state.player.jokers.some(playerJoker => playerJoker.id === joker.id) &&
            !storedJokers.some(storedJoker => storedJoker.id === joker.id)
        );
    }

    const [randomJokers, setRandomJokers] = useState<Joker[]>([]);

    useEffect(() => {
        const jokers = availableJokers();
        // Zamícháme dostupné jokery
        const shuffledJokers = jokers.sort(() => 0.5 - Math.random());
        // Vybereme první dva z zamíchaného seznamu
        setRandomJokers(shuffledJokers.slice(0, 2));
    }, [state.player.jokers, storedJokers]); // Závislosti pro aktualizaci když se změní jokery hráče nebo uložené jokery

    return (
        <div>
            {randomJokers.map((joker, index) => (
                <div key={index}>{joker.id} {joker.condition} {joker.effect} {joker.effectValue}</div> 

            ))}
        </div>
    );
}

export default Rewards;
