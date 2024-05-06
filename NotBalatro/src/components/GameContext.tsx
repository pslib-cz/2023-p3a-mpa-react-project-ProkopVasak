import React, { PropsWithChildren, createContext, useReducer, useState, useEffect } from 'react';
import { Player, Card, Joker, State, Action, Condition, actionType } from './types';
import { Pack, Combos, Enemies } from "./Data";
import useLocalStorage from './useLocalStorage';

const player: Player = { deck: Pack, jokers: [] };

const initialState: State = {
    player: player,
    enemy: Enemies[0],
    rewards: false,
    currentCards: [],
    selectedCards: [],
    attemptsLeft: 3,  // Add this line
    gameOver: false,  // Add this line
    changeCardsAttemptsLeft: 3,  // Přidáno
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'END':
            return {
                ...state,
                gameOver: action.end
            };
        case 'CHANGE_ATTEMPTS':
            return {
                ...state,
                attemptsLeft: action.eva,
                changeCardsAttemptsLeft: action.change
            }
        case 'CHANGE_REWARDS':
            return {
                ...state,
                rewards: action.rew
            };
        case "CHANGE_SELECTED_CARDS":
            if (state.changeCardsAttemptsLeft > 0) {
                const newCurrentCards = state.currentCards.filter(card => !state.selectedCards.includes(card));
                const neededCardsCount = 8 - newCurrentCards.length;
                const newDeckCards = state.player.deck.slice(0, neededCardsCount);
                const remainingDeck = state.player.deck.slice(neededCardsCount);

                return {
                    ...state,
                    currentCards: [...newCurrentCards, ...newDeckCards],
                    player: { ...state.player, deck: remainingDeck },
                    selectedCards: [],
                    changeCardsAttemptsLeft: state.changeCardsAttemptsLeft - 1 // Snížení počtu pokusů
                };
            } else {
                // Možné zobrazení zprávy nebo jiné akce, pokud nejsou pokusy k dispozici
                return state;
            }


        case 'SET_CURRENT_CARDS':
            return {
                ...state,
                currentCards: action.cards
            };
        case 'TOGGLE_CARD_SELECTION':
            const isCardSelected = state.selectedCards.some(card => card.id === action.card.id);
            return {
                ...state,
                selectedCards: isCardSelected
                    ? state.selectedCards.filter(card => card.id !== action.card.id)
                    : [...state.selectedCards, action.card]
            };
        case 'LOAD_INITIAL_CARDS':
            const initialCards = state.player.deck.sort(() => Math.random() - 0.5).slice(0, 8);
            return {
                ...state,
                currentCards: initialCards,
                player: {
                    ...state.player,
                    deck: state.player.deck.slice(8)  // Aktualizovat balíček odstraněním již vybraných karet
                }
            };
        case "UPDATE_DECK":
            return { ...state, player: {...state.player, deck: action.deck }};
        case "SHUFFLE_DECK":
      return { ...state, player: {...state.player , deck: state.player.deck.sort(() => Math.random() - 0.5) }};
        case 'RESET_SELECTED_CARDS':
            return {
                ...state,
                selectedCards: []
            };
        case 'UPDATE_JOKER_ORDER':
            return {
                ...state,
                player: {
                    ...state.player,
                    jokers: action.jokers
                }
            };
        case 'REMOVE_JOKER_FROM_PLAYER':
            return {
                ...state,
                player: {
                    ...state.player,
                    jokers: state.player.jokers.filter(joker => joker.id !== action.jokerId)
                }
            };
        case "SET_ENEMY_SCORE":
            return {
                ...state,
                enemy: { ...state.enemy, score: action.score }
            };
        case "ADD_JOKER_TO_PLAYER":
            if (!state.player.jokers.some(joker => joker.id === action.joker.id)) {
                return {
                    ...state,
                    player: { ...state.player, jokers: [...state.player.jokers, action.joker] }
                };
            }
            return state;
        case "SET_NEXT_ENEMY":
            const sortedEnemies = [...Enemies].sort((a, b) => a.score - b.score);
            const currentEnemyIndex = sortedEnemies.findIndex(enemy => enemy.id === state.enemy.id);
            const nextEnemy = sortedEnemies[currentEnemyIndex + 1] || sortedEnemies[0]; // loop back if at the end
            
            return {
                ...state,
                enemy: nextEnemy
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

            const calculateValues = () => {
                let value = 0;
                for (let i = 0; i < action.cards.length; i++) {
                    value += action.cards[i].value;
                }
                return value;
            }

            const shuffle = (array: Card[]) => {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]]; // ES6 swap
                }
            }
            

            const playerCombo = findCombo(action.cards);
            
            const handValue = calculateValues();
            const newAttemptsLeft = state.attemptsLeft - 1;
            const updatedDeck = [...state.player.deck, ...action.cards];
            const remainingCurrentCards = state.currentCards.filter(card => !action.cards.find(ac => ac.id === card.id));
            shuffle(updatedDeck);
            const neededCards = 8 - remainingCurrentCards.length;
            const newCards = updatedDeck.slice(0, neededCards);
            const newRemainingDeck = updatedDeck.slice(neededCards);
            
            const totalImpact = playerCombo.baseChips + handValue;
            const newEnemyScore = Math.max(0, state.enemy.score - (totalImpact * (playerCombo.baseMult + jokerMult(state.player.jokers))));
            if (newEnemyScore === 0) {
                // Enemy is defeated, move to next enemy and reset attempts
                const nextEnemyIndex = (Enemies.findIndex(enemy => enemy.id === state.enemy.id) + 1) % Enemies.length;
                return {
                    ...state,
                    enemy: Enemies[nextEnemyIndex],
                    attemptsLeft: 3,
                    currentCards: updatedDeck.slice(0, 8),
                    selectedCards: [],
                    player: {...state.player, deck: newRemainingDeck},
                    rewards: true,
                };
            } else if (newAttemptsLeft <= 0) {
                // No attempts left, game over
                return {
                    ...state,
                    gameOver: true,
                    attemptsLeft: 0,
                    player: {...state.player, deck: updatedDeck},
                    currentCards: [...remainingCurrentCards, ...newCards],
                    selectedCards: [],
                };
            } else {
                // Continue the game with the new state
                return {
                    ...state,
                    enemy: {...state.enemy, score: newEnemyScore},
                    attemptsLeft: newAttemptsLeft,
                    currentCards: [...remainingCurrentCards, ...newCards],
                    selectedCards: [],
                    player: {...state.player, deck: newRemainingDeck},
                };
            }
        default:
            return state;
    }
};

export const GameContext = createContext<{state: State, dispatch: React.Dispatch<Action>, selectedCards: Card[], setSelectedCards: React.Dispatch<React.SetStateAction<Card[]>>}>({ state: initialState, dispatch: () => null, selectedCards: [], setSelectedCards: () => null });

const GameContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [enemyScore, setEnemyScore] = useLocalStorage<number>('enemyScore', initialState.enemy.score);
    const [rewards, setRewards] = useLocalStorage<boolean>('rewards', initialState.rewards);
    const [playerJokers, setPlayerJokers] = useLocalStorage<Joker[]>('playerJokers', initialState.player.jokers);
    const [state, dispatch] = useReducer(reducer, {...initialState, player: { ...initialState.player, jokers: playerJokers }, enemy: {...initialState.enemy, score: enemyScore}});
    const [storedCurrentCards, setStoredCurrentCards] = useLocalStorage<Card[]>('currentCards', []);
    const [attemptsLeft, setAttemptsLeft] = useLocalStorage('attemptsLeft', initialState.attemptsLeft);
    const [changeCardsAttemptsLeft, setChangeCardsAttemptsLeft] = useLocalStorage('changeCardsAttemptsLeft', initialState.changeCardsAttemptsLeft);
    const [gameOver, setGameOver] = useLocalStorage('gameOver', initialState.gameOver);

     useEffect(() => {
        setAttemptsLeft(state.attemptsLeft);
        setChangeCardsAttemptsLeft(state.changeCardsAttemptsLeft);
        setGameOver(state.gameOver); 
    }, [state.attemptsLeft, state.changeCardsAttemptsLeft, state.gameOver]);

    useEffect(() => {
        dispatch({ type: actionType.SET_ENEMY_SCORE, score: enemyScore });
    }, [enemyScore]);

    useEffect(() => {
        setPlayerJokers(state.player.jokers);
    }, [state.player.jokers]);

    useEffect(() => {
        setEnemyScore(state.enemy.score);
    }, [state.enemy.score]);

    useEffect(() => {
        dispatch({ type: actionType.END, end: gameOver });
        dispatch({ type: actionType.CHANGE_ATTEMPTS, eva: attemptsLeft, change: changeCardsAttemptsLeft });
        dispatch({ type: actionType.CHANGE_REWARDS, rew: rewards });
        if (storedCurrentCards.length > 0) {
            dispatch({ type: actionType.SET_CURRENT_CARDS, cards: storedCurrentCards });
        } else {
            dispatch({ type: actionType.LOAD_INITIAL_CARDS });
        }
    }, []);

    // Ukládání karet do localStorage při jejich změně
    useEffect(() => {
        setStoredCurrentCards(state.currentCards);
    }, [state.currentCards]);

    useEffect(() => {
        setRewards(state.rewards);
    }, [state.rewards]);
    const [selectedCards, setSelectedCards] = useState<Card[]>([]);

    return (
        <GameContext.Provider value={{ state, dispatch, selectedCards, setSelectedCards }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;
