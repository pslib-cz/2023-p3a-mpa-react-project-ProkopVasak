import React, { PropsWithChildren, createContext, useReducer } from 'react';
import { Player, Enemy, Card, Joker, State, Action, CardNumber, Combo } from './types';
import { Pack } from "./Data";
import { useState } from 'react';


const player: Player = ({ deck: Pack, jokers: [] });
const enemy: Enemy = ({ name: "Enemy", score: 300 });

const initialState = {
    player: player,    
    enemy: enemy,
};



const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "EVALUATE_CARDS":
            //A,2,3,4,5,6,7,8,9,10,J,Q,K
            const values: number[] = [];
            //spades,hearts,diamonds,clubs
            const types: number[] = [];
            const getBetsCombo = () => {
                action.cards.forEach(element => {
                    switch (element.type) {
                        case "Spades":
                            types[0]++;
                            break;
                        case "Hearts":
                            types[1]++;
                            break;
                        case "Diamonds":
                            types[2]++;
                            break;
                        case "Clubs":
                            types[3]++;
                            break;
                    }   
                    switch (element.value) {
                        case CardNumber.A:
                            values[0]++;
                            break;
                        case CardNumber.Two:
                            values[1]++;
                            break;
                        case CardNumber.Three:
                            values[2]++;
                            break;
                        case CardNumber.Four:
                            values[3]++;
                            break;
                        case CardNumber.Five:
                            values[4]++;
                            break;
                        case CardNumber.Six:
                            values[5]++;
                            break;
                        case CardNumber.Seven:
                            values[6]++;
                            break;
                        case CardNumber.Eight:
                            values[7]++;
                            break;
                        case CardNumber.Nine:
                            values[8]++;
                            break;
                        case CardNumber.Ten:
                            values[9]++;
                            break;
                        case CardNumber.J:
                            values[10]++;
                            break;
                        case CardNumber.Q:
                            values[11]++;
                            break;
                        case CardNumber.K:
                            values[12]++;
                            break;
                    } 
                    const checkFiveConsecutiveOnes = () => {
                        let count = 0;
                        for (let i = 0; i < values.length; i++) {
                            if (values[i] === 1) {
                                count++;
                                if (count === 5) {
                                    return true;
                                }
                            } else {
                                count = 0;
                            }
                        }
                        return false;
                    };
                    const checkFiveSameType = () => {
                        types.forEach(element => {
                            if (element === 5) {
                                return true;
                            }
                        });
                        return false;
                    }

                    const checkFourOfAKind = () => {
                        for (let i = 0; i < values.length; i++) {
                            if (values[i] === 4) {
                                return true;
                            }
                        }
                        return false;
                    }

                    const checkFullHouse = () => {
                        let three = false;
                        let two = false;
                        for (let i = 0; i < values.length; i++) {
                            if (values[i] === 3) {
                                three = true;
                            }
                            if (values[i] === 2) {
                                two = true;
                            }
                        }
                        return three && two;
                    }

                    const checkThreeOfAKind = () => {
                        for (let i = 0; i < values.length; i++) {
                            if (values[i] === 3) {
                                return true;
                            }
                        }
                        return false;
                    }

                    const checkTwoPairs = () => {
                        let pairs = 0;
                        for (let i = 0; i < values.length; i++) {
                            if (values[i] === 2) {
                                pairs++;
                            }
                        }
                        return pairs === 2;
                    }
                    const checkPair = () => {
                        for (let i = 0; i < values.length; i++) {
                            if (values[i] === 2) {
                                return true;
                            }
                        }
                        return false;
                    }

                    if(checkFiveConsecutiveOnes()&&checkFiveSameType()){
                        return "straight flush"
                    }

                    if(checkFourOfAKind()){
                        return "four of a kind"
                    }

                    if (checkFullHouse()) {
                        return "full house"
                    }

                    if (checkFiveSameType()) {
                        return "flush"
                    }

                    if (checkFiveConsecutiveOnes()) {
                        return "straight"
                    }

                    if (checkThreeOfAKind()) {
                        return "three of a kind"
                    }

                    if (checkTwoPairs()){
                        return "two pair"
                    }

                    if (checkPair()) {
                        return "pair"
                    }
                    
                    else return "high card";



                                                             
                });
            }
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