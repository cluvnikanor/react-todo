import React from "react";
import styles from "./TodoItem.module.css";

// function TodoItem(props) {
//   return ()
// }

class TodoItem extends React.Component {
  state = {
    editing: false,
    updatedText: "",
  };

  switchEditing = () => {
    this.setState({ editing: !this.state.editing });
  };

  handleUpdate = () => {};

  componentWillUnmount(){
    console.log("cleaning up...")
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    const { completed, id, title } = this.props.todo;

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <li className={styles.item}>
        <div style={viewMode} onDoubleClick={this.switchEditing}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <div style={editMode}>
          <input
            type="text"
            style={editMode}
            className={styles.textInput}
            placeholder={title}
            onChange={(e) => {
              this.setState({ updatedText: e.target.value });
            }}
          />
          <button
            onClick={(e) => {
              this.props.setUpdateProps(this.state.updatedText, id);
              this.switchEditing();
            }}
          >
            update
          </button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
