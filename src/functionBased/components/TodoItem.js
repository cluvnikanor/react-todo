import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css";
import { AiFillDelete } from "react-icons/ai"


const TodoItem = props => {

  const [editing, setEditing] = useState(false)
  const [updatedText, setUpdatedText] = useState("")

  const switchEditing = () => setEditing(!editing)

  useEffect(() => {
    return (() => console.log("Cleaning up..."))
  }, [])

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className={styles.item}>
      <div style={viewMode} onDoubleClick={switchEditing}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}><AiFillDelete/></button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <div style={editMode}>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          placeholder={title}
          onChange={e => setUpdatedText(e.target.value)}
        />
        <button
          onClick={e => {
            props.setUpdateProps(updatedText, id);
            switchEditing();
          }}
        >
          update
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
