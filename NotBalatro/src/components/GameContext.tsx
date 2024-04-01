import React, { PropsWithChildren, createContext, useReducer } from 'react';
import { Player, Enemy, Card, Joker, State, Action } from './types';
import { Pack } from "./Data";
import { useState } from 'react';


const player: Player = ({ deck: Pack, jokers: [] });
const enemy: Enemy = ({ name: "Enemy", score: 0 });

const initialState = {
    player: player,    
    enemy: enemy,
};



const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "EVALUATE_CARDS":
            return { ...state };
        default:
            return state;
    }
};

export const GameContext = createContext<{state: State, dispatch:React.Dispatch<any>,selectedCards: Card[] , setSelectedCards: React.Dispatch<any>}>({state: initialState, dispatch: () => null, selectedCards: [] , setSelectedCards: () => null});

const GameContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [selectedCards, setSelectedCards] = useState<Card[]>([]);
    
    return (
        <GameContext.Provider value={{ state, dispatch, selectedCards, setSelectedCards }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;