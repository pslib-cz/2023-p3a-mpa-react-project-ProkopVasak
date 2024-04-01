import { Card, CardNumber, CardType, Joker, SpecialCardEffect, Condition, Combo } from './types';

export const Pack: Card[] = [
    { id: 1, type: CardType.Spades, value: CardNumber.A, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_ace.svg" },
    { id: 2, type: CardType.Spades, value: CardNumber.Two, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_2.svg" },
    { id: 3, type: CardType.Spades, value: CardNumber.Three, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_3.svg" },
    { id: 4, type: CardType.Spades, value: CardNumber.Four, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_4.svg" },
    { id: 5, type: CardType.Spades, value: CardNumber.Five, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_5.svg" },
    { id: 6, type: CardType.Spades, value: CardNumber.Six, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_6.svg" },
    { id: 7, type: CardType.Spades, value: CardNumber.Seven, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_7.svg" },
    { id: 8, type: CardType.Spades, value: CardNumber.Eight, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_8.svg" },
    { id: 9, type: CardType.Spades, value: CardNumber.Nine, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_9.svg" },
    { id: 10, type: CardType.Spades, value: CardNumber.Ten, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_10.svg" },
    { id: 11, type: CardType.Spades, value: CardNumber.J, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_jack.svg" },
    { id: 12, type: CardType.Spades, value: CardNumber.Q, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_queen.svg" },
    { id: 13, type: CardType.Spades, value: CardNumber.K, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/spades_king.svg" },
    { id: 14, type: CardType.Hearts, value: CardNumber.A, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_ace.svg" },
    { id: 15, type: CardType.Hearts, value: CardNumber.Two, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_2.svg" },
    { id: 16, type: CardType.Hearts, value: CardNumber.Three, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_3.svg" },
    { id: 17, type: CardType.Hearts, value: CardNumber.Four, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_4.svg" },
    { id: 18, type: CardType.Hearts, value: CardNumber.Five, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_5.svg" },
    { id: 19, type: CardType.Hearts, value: CardNumber.Six, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_6.svg" },
    { id: 20, type: CardType.Hearts, value: CardNumber.Seven, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_7.svg" },
    { id: 21, type: CardType.Hearts, value: CardNumber.Eight, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_8.svg" },
    { id: 22, type: CardType.Hearts, value: CardNumber.Nine, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_9.svg" },
    { id: 23, type: CardType.Hearts, value: CardNumber.Ten, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_10.svg" },
    { id: 24, type: CardType.Hearts, value: CardNumber.J, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_jack.svg" },
    { id: 25, type: CardType.Hearts, value: CardNumber.Q, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_queen.svg" },
    { id: 26, type: CardType.Hearts, value: CardNumber.K, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/hearts_king.svg" },
    { id: 27, type: CardType.Diamonds, value: CardNumber.A, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_ace.svg" },
    { id: 28, type: CardType.Diamonds, value: CardNumber.Two, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_2.svg" },
    { id: 29, type: CardType.Diamonds, value: CardNumber.Three, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_3.svg" },
    { id: 30, type: CardType.Diamonds, value: CardNumber.Four, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_4.svg" },
    { id: 31, type: CardType.Diamonds, value: CardNumber.Five, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_5.svg" },
    { id: 32, type: CardType.Diamonds, value: CardNumber.Six, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_6.svg" },
    { id: 33, type: CardType.Diamonds, value: CardNumber.Seven, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_7.svg" },
    { id: 34, type: CardType.Diamonds, value: CardNumber.Eight, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_8.svg" },
    { id: 35, type: CardType.Diamonds, value: CardNumber.Nine, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_9.svg" },
    { id: 36, type: CardType.Diamonds, value: CardNumber.Ten, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_10.svg" },
    { id: 37, type: CardType.Diamonds, value: CardNumber.J, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_jack.svg" },
    { id: 38, type: CardType.Diamonds, value: CardNumber.Q, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_queen.svg" },
    { id: 39, type: CardType.Diamonds, value: CardNumber.K, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/diamonds_king.svg" },
    { id: 40, type: CardType.Clubs, value: CardNumber.A, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_ace.svg" },
    { id: 41, type: CardType.Clubs, value: CardNumber.Two, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_2.svg" },
    { id: 42, type: CardType.Clubs, value: CardNumber.Three, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_3.svg" },
    { id: 43, type: CardType.Clubs, value: CardNumber.Four, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_4.svg" },
    { id: 44, type: CardType.Clubs, value: CardNumber.Five, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_5.svg" },
    { id: 45, type: CardType.Clubs, value: CardNumber.Six, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_6.svg" },
    { id: 46, type: CardType.Clubs, value: CardNumber.Seven, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_7.svg" },
    { id: 47, type: CardType.Clubs, value: CardNumber.Eight, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_8.svg" },
    { id: 48, type: CardType.Clubs, value: CardNumber.Nine, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_9.svg" },
    { id: 49, type: CardType.Clubs, value: CardNumber.Ten, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_10.svg" },
    { id: 50, type: CardType.Clubs, value: CardNumber.J, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_jack.svg" },
    { id: 51, type: CardType.Clubs, value: CardNumber.Q, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_queen.svg" },
    { id: 52, type: CardType.Clubs, value: CardNumber.K, effect: SpecialCardEffect.Default, effectValue: 0, UrlImg: "./src/images/clubs_king.svg" },
];

export const Jokers: Joker[] = [
    {effect: SpecialCardEffect.Mult, effectValue: 4, condition: Condition.Clubs},
    {effect: SpecialCardEffect.Mult, effectValue: 4, condition: Condition.Hearts},
    {effect: SpecialCardEffect.Mult, effectValue: 4, condition: Condition.Diamonds},
    {effect: SpecialCardEffect.Mult, effectValue: 4, condition: Condition.Spades},
];

export const Combos: Combo[] = [
    {name: "straight flush", baseMult: 8, baseChips: 100},
    {name: "four of a kind", baseMult: 7, baseChips: 60},
    {name: "full house", baseMult: 4, baseChips: 40},
    {name: "flush", baseMult: 4, baseChips: 35},
    {name: "straight", baseMult: 4, baseChips: 30},
    {name: "three of a kind", baseMult: 3, baseChips: 30},
    {name: "two pair", baseMult: 2, baseChips: 20},
    {name: "pair", baseMult: 2, baseChips: 10},
    {name: "high card", baseMult: 1, baseChips: 5},
];
