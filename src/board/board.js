import "./board.scss";
import React, { useState } from "react";
import uuid from "uuid/v4";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { MdAdd } from "react-icons/md";
import BoardList from "../board-list/board-list";
import BoardListEmpty from "../board-list/board-list-empty";

const Board = () => {
  const [list, setList] = useState({
    // [uuid()]: [],
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleDragEnd = () => {};

  const addList = (title) => {
    setList((prevState) => ({
      ...prevState,
      [uuid()]: { title, cards: [] },
    }));
    setIsAdding(false);
  };

  const addCard = (id, label) => {
    setList((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], cards: [...prevState[id].cards, { label }] },
    }));
    setIsAdding(false);
  };

  const editCard = (id, label, index) => {
    setList((prevState) => {
      const updatedCards = prevState[id].cards;
      updatedCards[index] = { label };
      return {
        ...prevState,
        [id]: { ...prevState[id], cards: [...updatedCards] },
      };
    });
    setIsAdding(false);
  };

  const editTitle = (id, title) => {
    setList((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], title },
    }));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="COLUMN">
        {(provided, _snapshot) => (
          <div className="board" ref={provided.innerRef}>
            {Object.keys(list).map((listId, index) => (
              <div className="board--list-wrapper">
                <BoardList
                  id={listId}
                  key={listId}
                  data={list[listId]}
                  index={index}
                  addCard={addCard}
                  editTitle={editTitle}
                  editCard={editCard}
                />
              </div>
            ))}
            {/* {provided.placeholder} */}
            <BoardListEmpty
              isAdding={isAdding}
              setIsAdding={setIsAdding}
              addList={addList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
