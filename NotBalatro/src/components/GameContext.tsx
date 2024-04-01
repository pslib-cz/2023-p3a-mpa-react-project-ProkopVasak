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
const [selectedCards, setSelectedCards] = useState<Card[]>([]);

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        /*case SET_PLAYER:
            return { ...state, player: action.payload };
        case SET_ENEMY:
            return { ...state, enemy: action.payload };*/
        default:
            return state;
    }
};

export const GameContext = createContext<{state: State, dispatch:React.Dispatch<any>,selectedCards: Card[] , setSelectedCards: React.Dispatch<any>}>({state: initialState, dispatch: () => null, selectedCards: [] , setSelectedCards: setSelectedCards});

const GameContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GameContext.Provider value={{ state, dispatch, selectedCards, setSelectedCards }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;