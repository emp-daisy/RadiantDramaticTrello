import "./board-item.scss";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";

const BoardItem = ({ item: data, id, index, editItem }) => {
  const ref = React.createRef();
  const [item, setItem] = useState(data);
  const [isHover, setHover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const saveCard = () => {
    if (!!item) {
      editItem(id, item.trim(), index);
      setIsEditing(false);
      setHover(false);
    }
  };
  const handleClick = (e) => {
    if (!ref.current || ref.current.contains(e.target) || !isEditing) {
      return;
    }
    setItem(data);
    setIsEditing(false);
    setHover(false);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick, false);
    return () => {
      document.removeEventListener("click", handleClick, false);
    };
  });

  return isEditing ? (
    <div className="board--list--item__new" ref={ref}>
      <textarea
        onChange={({ target: { value } }) => setItem(value)}
        value={item}
      />
      <div className="board--list--item__new-actions">
        <button onClick={saveCard}>Save</button>
      </div>
    </div>
  ) : (
    <div
      ref={ref}
      className="board--list--item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <span>{data}</span>
      {isHover && (
          <MdEdit onClick={() => setIsEditing(true)} className="board--list--item-edit"/>
      )}
    </div>
  );
};

export default BoardItem;
