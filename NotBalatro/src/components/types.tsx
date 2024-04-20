//hrací karty
export enum CardType {
    Hearts = "Hearts",
    Diamonds = "Diamonds",
    Clubs = "Clubs",
    Spades = "Spades",
}

export enum CardNumber {
    A = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    J = 11,
    Q = 12,
    K = 13,

}

export enum SpecialCardEffect {
    Mult,
    Chip,
    Default,
}

export enum Condition {
    Spades = "Spades",
    Hearts = "Hearts",
    Diamonds = "Diamonds",
    Clubs = "Clubs",
}

export enum actionType {
    EVALUATE_CARDS = "EVALUATE_CARDS",
    ADD_JOKER_TO_PLAYER = "ADD_JOKER_TO_PLAYER",
    SET_ENEMY_SCORE = "SET_ENEMY_SCORE",
    SET_NEXT_ENEMY = "SET_NEXT_ENEMY",
    REMOVE_JOKER_FROM_PLAYER = "REMOVE_JOKER_FROM_PLAYER",
    UPDATE_JOKER_ORDER = "UPDATE_JOKER_ORDER",
    RESET_SELECTED_CARDS = "RESET_SELECTED_CARDS",
    SHUFFLE_DECK = 'SHUFFLE_DECK',
    UPDATE_DECK = 'UPDATE_DECK',
    LOAD_INITIAL_CARDS = 'LOAD_INITIAL_CARDS',
    TOGGLE_CARD_SELECTION = 'TOGGLE_CARD_SELECTION',
    SET_CURRENT_CARDS = 'SET_CURRENT_CARDS',

}

export type Action = |{type: actionType.EVALUATE_CARDS , cards: Card[] }
                        |{ type: actionType.ADD_JOKER_TO_PLAYER; joker: Joker }
                        | {type: actionType.SET_ENEMY_SCORE, score: number}
                        | { type: actionType.SET_NEXT_ENEMY}
                        | { type: actionType.REMOVE_JOKER_FROM_PLAYER; jokerId: number }
                        | { type: actionType.UPDATE_JOKER_ORDER; jokers: Joker[] }
                        | { type: actionType.RESET_SELECTED_CARDS } 
                        | { type: actionType.SHUFFLE_DECK } 
                        | { type: actionType.UPDATE_DECK; deck: Card[] }
                        | { type: actionType.LOAD_INITIAL_CARDS;} 
                        | { type: actionType.TOGGLE_CARD_SELECTION; card: Card } 
                        | { type: actionType.SET_CURRENT_CARDS; cards: Card[] }



export interface Card {
    id: number;
    type: CardType;
    value: CardNumber;
    effect: SpecialCardEffect;
    effectValue: number;
    UrlImg: string;
}

export interface Joker{
    id: number;
    effect: SpecialCardEffect;
    effectValue: number;
    condition: Condition;
}

export interface Player {
    deck: Card[];
    jokers: Joker[];
}

export interface Enemy {
    name: string;
    score: number;
}

export interface State {
    player: Player;
    enemy: Enemy;
    rewards: boolean;
    currentCards: Card[];
    selectedCards: Card[];
}

export interface Combo {
    name: string;
    baseMult: number;
    baseChips: number;
}

export interface Stats {
    
}
