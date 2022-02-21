import React, { useState, useEffect } from "react"
import TodosList from "./TodosList"
import InputTodo from "./InputTodo"
import Header from "./Header"
import { v4 as uuidv4 } from "uuid"

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    // const fetchedTodos = fetch("https://jsonplaceholder.typicode.com/todos?_limit=2")
    //   .then((response) => response.json())
    // console.log(fetchedTodos)
    const savedTodos = JSON.parse(localStorage.getItem("todos"))
    return savedTodos || []
  }

  // useEffect(() => {
  //   const loadedTodos = JSON.parse(localStorage.getItem("todos"))
  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // componentDidMount2() {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=2")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({todos:data}));
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todos !== this.state.todos) {
  //     const temp = JSON.stringify(this.state.todos);
  //     localStorage.setItem("todos", temp);
  //   }
  // }

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    )
  }

  // delTodo2 = (id) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter((todo) => {
  //       return todo.id !== id;
  //     }),
  //   }));
  // };

  const delTodo = id => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo])
  };

  const setUpdate = (updatedTitle, id) => {
    todos.map((todo) => {
      if (todo.id === id)
        todo.title = updatedTitle
      return todo
    })
  }

  return (

    // <>
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
    // </>
  )
}
export default TodoContainer;
