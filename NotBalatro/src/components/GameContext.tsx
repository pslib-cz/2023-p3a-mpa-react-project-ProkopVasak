import React, { PropsWithChildren, createContext, useReducer, useState } from 'react';
import { Player, Enemy, Card, Joker, State, Action, CardNumber, Combo, Condition } from './types';
import { Pack, Combos, Jokers, Enemies } from "./Data";

const player: Player = { deck: Pack, jokers: [Jokers[0], Jokers[1]] };
const enemy: Enemy = Enemies[0];

const initialState: State = {
    player: player,
    enemy: enemy,
    rewards: false,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ADD_JOKER":
            return {
                ...state,
                player: { ...state.player, jokers: [...state.player.jokers, action.joker] }
            };
        
        case "EVALUATE_CARDS":
            const checkStraightFlush = (value: number[], type: number[]) => {
                for (let i = 0; i < value.length; i++) {
                    if (value[i] === 1 && value[i + 1] === 1 && value[i + 2] === 1 && value[i + 3] === 1 && value[i + 4] === 1 && type.includes(5)) {
                        return true;
                    }
                    
                }
                return false;
            }
            

            const checkFourOfAKind = (value: number[]) => {
                for (let i = 0; i < value.length ; i++) {
                    if (value[i] === 4) {
                        return true;
                    }
                    
                }
                return false;
            }

            const checkFullHouse = (value: number[]) => {
                var three: boolean = false
                var two: boolean = false
                for (let i = 0; i < value.length; i++) {
                    if (value[i] === 3) {
                        three = true;
                    }
                    else if (value[i] === 2) {
                        two = true;
                    }
                }
                if (three === true && two === true) {
                    return true;
                }
                else return false;
            }

            const checkFlush = (value: number[]) => {
                for (let i = 0; i < value.length; i++) {
                    if (value[i] === 5) {
                        return true;
                    }
                    
                }
                return false;
            }

            const checkStraight = (value: number[]) => {
                for (let i = 0; i < value.length; i++) {
                    if (value[i] === 1 && value[i + 1] === 1 && value[i + 2] === 1 && value[i + 3] === 1 && value[i + 4] === 1) {
                        return true;
                    }
                    
                }
                return false;
            }

            const checkThreeOfAKind = (value: number[]) => {
                for (let i = 0; i < value.length; i++) {
                    if (value[i] === 3) {
                        return true;
                    }
                    
                }
                return false;
            }

            const checkTwoPairs = (value: number[]) => {
                var pairs: number = 0;
                for (let i = 0; i < value.length; i++) {
                    if (value[i] === 2) {
                        pairs += 1;
                    }
                }
                if (pairs === 2) {
                    return true;
                }
                else return false;

            }

            const checkPair = (value: number[]) => {
                for (let i = 0; i < value.length; i++) {
                    if (value[i] === 2) {
                        return true;
                    }
                    
                }
                return false;

            }
            const values: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0]
            const types: number[] = [0,0,0,0]
            const findCombo = (cards: Card[]) => {
                
                for (let i = 0; i < cards.length; i++) {
                    values[cards[i].value-1] += 1;
                    switch(cards[i].type){
                        case "Spades":
                            types[0] += 1;
                            break;
                        case "Hearts":
                            types[1] += 1;
                            break;
                        case "Diamonds":
                            types[2] += 1;
                            break;
                        case "Clubs":
                            types[3] += 1;
                            break;
                    }
                }
                if (checkStraightFlush(values, types)) {
                    return Combos[0];
                } else if (checkFourOfAKind(values)){
                    return Combos[1];
                } else if (checkFullHouse(values)){
                    return Combos[2];
                } else if (checkFlush(types)){
                    return Combos[3];
                } else if (checkStraight(values)){
                    return Combos[4];
                } else if (checkThreeOfAKind(values)){
                    return Combos[5];
                } else  if (checkTwoPairs(values)){
                    return Combos[6];
                } else if (checkPair(values)){
                    return Combos[7];
                } else {
                    return Combos[8];
                }
            };
            
            const jokerMult = (card:Joker[]) => {
                var jokerMult = 0;
                for (var i = 0; i < state.player.jokers.length; i++) {
                    if (card[i].condition === Condition.Spades) {
                        for (var j = 0; j < types[0]; j++) {
                            jokerMult += 4;
                        }
                    }
                    if (card[i].condition === Condition.Hearts) {
                        for (var j = 0; j < types[1]; j++) {
                            jokerMult += 4;
                        }
                    }
                    if (card[i].condition === Condition.Diamonds) {
                        for (var j = 0; j < types[2]; j++) {
                            jokerMult += 4;
                        }
                    }
                    if (card[i].condition === Condition.Clubs) {
                        for (var j = 0; j < types[3]; j++) {
                            jokerMult += 4;
                        }
                    }
                };
                return jokerMult
            }
            

            const playerCombo = findCombo(action.cards);
            
            console.log(playerCombo.name);
            return {
                ...state,
                enemy: { ...state.enemy, score: state.enemy.score - ((playerCombo.baseChips) * (playerCombo.baseMult + jokerMult(state.player.jokers))) }
            };
        default:
            return state;
    }
};

export const GameContext = createContext<{state: State, dispatch: React.Dispatch<Action>, selectedCards: Card[], setSelectedCards: React.Dispatch<React.SetStateAction<Card[]>>}>({ state: initialState, dispatch: () => null, selectedCards: [], setSelectedCards: () => null });

const GameContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [selectedCards, setSelectedCards] = useState<Card[]>([]);

    return (
        <GameContext.Provider value={{ state, dispatch, selectedCards, setSelectedCards }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;
