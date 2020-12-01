import "./board-list.scss";
import React, { useState } from "react";
import uuid from "uuid/v4";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MdAdd, MdClear, MdMoreHoriz } from "react-icons/md";
import BoardItem from "../board-item/board-item";

const AddCard = ({ count, id, addCard }) => {
  const ref = React.createRef();
  const [label, setLabel] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const saveCard = () => {
    if (!!label) {
      addCard(id, label);
      setLabel("");
      setIsAdding(false);
    }
  };

  const handleClick = (e) => {
    if (!ref.current || ref.current.contains(e.target) || !isAdding) {
      return;
    }
    setIsAdding(false);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick, false);
    return () => {
      document.removeEventListener("click", handleClick, false);
    };
  });
  return isAdding ? (
    <div className="board--list--card__new" ref={ref}>
      <textarea
        onChange={({ target: { value } }) => setLabel(value)}
        value={label}
      />
      <div className="board--list--card__new-actions">
        <button onClick={saveCard}>Add Card</button>
        <MdClear onClick={() => (setIsAdding(false), setLabel(""))} />
      </div>
    </div>
  ) : (
    <div className="board--list--card__add-actions">
      <button
        onClick={() => {
          setIsAdding(true);
        }}
        className="board--list--card__add-btn">
        <MdAdd />
        {` Add ${count ? "another " : ""}card`}
      </button>
      <MdMoreHoriz />
    </div>
  );
};

const ListTitle = ({ title: header, id, editTitle }) => {
  const ref = React.createRef();
  const [title, setTitle] = useState(header);
  const [isAdding, setIsAdding] = useState(false);
  const saveCard = () => {
    if (!!title) {
      console.log("Saving", title);
      editTitle(id, title.trim());
      setIsAdding(false);
    }
  };

  const handleClick = (e) => {
    if (!ref.current || ref.current.contains(e.target) || !isAdding) {
      return;
    }
    saveCard();
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick, false);
    return () => {
      document.removeEventListener("click", handleClick, false);
    };
  });
  return (
    <div className="board--list--card__title" ref={ref}>
      <div
        className="board--list--card__title-action"
        onClick={() => {
          setIsAdding(true);
        }}
        onInput={({ target: { innerText } }) => setTitle(innerText)}
        contentEditable>
        {header}
      </div>
      <div>
        <MdMoreHoriz />
      </div>
    </div>
  );
};

const BoardList = ({ data, id, index, addCard, editTitle, editCard }) => {
  return (
    <div className="board--list-wrapper board--list--card">
      <ListTitle id={id} editTitle={editTitle} title={data?.title} />

      <div className="board--list--card__items">
        {data?.cards?.map((cardInfo, index) => (
          <Draggable draggableId={id} index={index}>
            {(provided, _snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="List">
                <Droppable droppableId={id}>
                  {(provided, _snapshot) => (
                    <div ref={provided.innerRef}>
                      <BoardItem
                        item={cardInfo.label}
                        index={index}
                        id={id}
                        editItem={editCard}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            )}
          </Draggable>
        ))}
      </div>

      <AddCard id={id} addCard={addCard} count={data?.cards?.length} />
    </div>
  );
};

export default BoardList;
