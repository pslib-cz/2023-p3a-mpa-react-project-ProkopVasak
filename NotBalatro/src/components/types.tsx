//hrací karty
export enum CardType {
    Hearts = "Hearts",
    Diamonds = "Diamonds",
    Clubs = "Clubs",
    Spades = "Spades",
}

export enum CardNumber {
    A = 11,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    J = 10,
    Q = 10,
    K = 10,

}

export enum SpecialCardEffect {
    Mult,
    Chip,
    Default,
}

export enum Condition {

}

export enum actionType {Play}

export type Action = |{type: actionType.Play , payload: {cards: Card[]} };


export interface Card {
    type: CardType;
    value: CardNumber;
    effect: SpecialCardEffect;
    effectValue: number;
}

export interface Joker{
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
}

export interface Stats {
    
}
