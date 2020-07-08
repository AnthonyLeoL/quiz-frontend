import React, { useState } from "react";
import NewQuizComponent from "./NewQuizComponent";
import "../styles.css";

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
          text="edit"
          handleAdd={onEditSubmit}
          type={type}
          desc={text.description}
          head={text.header}
          buttonText="Update"
        />
        <div
          onClick={() => {
            setEditMode(!editMode);
          }}
        ></div>
      </div>
    );
  };

  const renderMenu = () => {
    return (
      <div className="inline">
        <span className="container-item" onClick={() => handleDelete(pos)}>
          🗑️
        </span>
        <span className="container-item" onClick={() => setEditMode(!editMode)}>
          ✏️
        </span>
      </div>
    );
  };
  const display = () => {
    return (
      <div>
        <div className="container" onClick={() => onSelect(pos)}>
          <div className={`${pos === selectedItem ? "selected" : ""}`}>
            #{pos + 1}: {text.header ? text.header : text.description}{" "}
            {leadsTo != null ? `→ result #${leadsTo + 1}` : ""}
            {pos === selectedItem ? renderMenu() : ""}
          </div>
        </div>

        <span>{text.header ? text.description : ""}</span>
      </div>
    );
  };
  return <div>{editMode ? edit() : display()}</div>;
};

export default QuizComponent;
