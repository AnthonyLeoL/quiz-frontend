import React, { useState } from "react";
import NewQuizComponent from "./NewQuizComponent";
import "./QuizComponent.css";

const QuizComponent = ({
  handleDelete,
  selectedItem,
  onSelect,
  leadsTo,
  pos,
  text,
  handleEdit,
  type,
}) => {
  let [editMode, setEditMode] = useState(false);
  const onEditSubmit = (desc, qNum, header) => {
    handleEdit(desc, qNum, header);
    setEditMode(!editMode);
  };
  const edit = () => {
    return (
      <div>
        <NewQuizComponent
          text="Edit"
          handleAdd={onEditSubmit}
          type={type}
          desc={text.description}
          head={text.header}
          buttonText="Update"
        />
      </div>
    );
  };

  const renderMenu = () => {
    return (
      <div className="inline">
        <span
          role="img"
          aria-label="trash"
          className="container-item icon"
          onClick={() => handleDelete(pos)}
        >
          🗑️
        </span>
        <span
          role="img"
          aria-label="pencil"
          className="container-item icon"
          onClick={() => setEditMode(!editMode)}
        >
          ✏️
        </span>
      </div>
    );
  };
  const display = () => {
    return (
      <div>
        <div className="quiz-component-container">
          <div className={` ${pos === selectedItem ? "selected" : ""}`}>
            <div className="selectable" onClick={() => onSelect(pos)}>
              #{pos + 1}: {text.header ? text.header : text.description}{" "}
              {leadsTo != null ? `→ result #${leadsTo + 1}` : ""}
            </div>
            {pos === selectedItem ? renderMenu() : ""}
          </div>
          <span className>{text.header ? text.description : ""}</span>
        </div>
      </div>
    );
  };
  return <div>{editMode ? edit() : display()}</div>;
};

export default QuizComponent;
