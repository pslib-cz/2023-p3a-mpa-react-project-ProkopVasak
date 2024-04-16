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
    ADD_JOKER = "ADD_JOKER",
    SET_ENEMY_SCORE = "SET_ENEMY_SCORE",
}

export type Action = |{type: actionType.EVALUATE_CARDS , cards: Card[] }
                        |{type: actionType.ADD_JOKER, joker: Joker} 
                        | {type: actionType.SET_ENEMY_SCORE, score: number};


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
}

export interface Combo {
    name: string;
    baseMult: number;
    baseChips: number;
}

export interface Stats {
    
}
