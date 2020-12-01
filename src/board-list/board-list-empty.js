import "./board-list.scss";
import React, { useState } from "react";
import { MdAdd, MdClear } from "react-icons/md";

const BoardListEmpty = ({ isAdding, setIsAdding, addList }) => {
  const ref = React.createRef();
  const [title, setTile] = useState("");
  const saveList = () => {
    if (!!title) {
      addList(title);
      setTile("");
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
  return (
    <div className="board--list-wrapper">
      {isAdding ? (
        <div className="board--list--empty-card" ref={ref}>
          <input onChange={({ target: { value } }) => setTile(value)} value={title} />
          <div className="board--list--empty-card-actions">
            <button onClick={saveList}>Add List</button>
            <MdClear onClick={() => setIsAdding(false)} />
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setIsAdding(true);
            }}
            className="board--list__add-button">
            <MdAdd />
            {` Add another list`}
          </button>
        </div>
      )}
    </div>
  );
};

export default BoardListEmpty;
