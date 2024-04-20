import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './GameContext';
import styles from "./Board.module.css";
import PlayingCard from "./Card.tsx"
import PlayingJoker from "./Joker.tsx"
import { Card } from "./types.tsx"
import { actionType } from "./types.tsx"
import useLocalStorage from './useLocalStorage';
import { DragDropContext, Droppable, Draggable, DropResult  } from 'react-beautiful-dnd';
import { Jokers } from './Data.tsx';

const Board: React.FC = () => {

    const { state, dispatch } = useContext(GameContext);
    const { currentCards, selectedCards } = state;


    const handleEvaluateCards = () => {
        dispatch({ type: actionType.EVALUATE_CARDS, cards: selectedCards });
        dispatch({ type: actionType.RESET_SELECTED_CARDS });
    };

    useEffect(() => {
        dispatch({ type: actionType.LOAD_INITIAL_CARDS });
    }, [dispatch]);

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;
        if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        const reorderedJokers = Array.from(state.player.jokers);
        const [removed] = reorderedJokers.splice(source.index, 1);
        reorderedJokers.splice(destination.index, 0, removed);
        dispatch({ type: actionType.UPDATE_JOKER_ORDER, jokers: reorderedJokers });
    };

    return (
        <>
            <div className={styles.board}>
                <div className={styles.joker__panel}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable-jokers">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {state.player.jokers.map((joker, index) => (
                                        <Draggable key={joker.id} draggableId={String(joker.id)} index={index}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <PlayingJoker joker={joker} isDragging={snapshot.isDragging} />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
                <div className={styles.sidepanel}>
                    <div>{state.enemy.score}</div>
                </div>
                <button className={styles.res} onClick={() => handleEvaluateCards()} disabled={selectedCards.length === 0}>
                    Vyhodnotit karty
                </button>
                <div className={styles.box}>
                <div className={styles.card_box}>
                    {currentCards.map((card) => (
                        <PlayingCard key={card.id} card={card} />
                    ))}
                </div>
                </div>
            </div>
        </>
    );
};

export default Board;