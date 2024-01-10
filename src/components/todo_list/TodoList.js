import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todoList.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoList() {
  const [todoItem, setTodoItem] = useState({ id: "", data: "" });

  const [todoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const id = uuidv4();
  function deleteTodo(id) {
    const getlist = todoList.filter((i) => i.id !== id);
    setTodoList(getlist);
  }
  function editTodo(id) {
    setIsEdit(true);
    const x = todoList.filter((i) => i.id === id);
    const y = x[0];
    setTodoItem({ id: y.id, data: y.data });
  }

  function addTodo() {
    if (todoItem.data) {
      if (isEdit) {
        const temp = [];
        todoList.forEach((i, index) => {
          console.log(i.id === todoItem.id);
          if (i.id === todoItem.id) {
            console.log("first");
            temp.push({ id: todoItem.id, data: todoItem.data });
          } else {
            temp.push(i);
          }
        });
        setTodoList(temp);
        setTodoItem({ id: "", data: "" });
        setIsEdit(false);
        toast.success("Update Todo item", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        setTodoList([...todoList, todoItem]);
        setTodoItem({ id: "", data: "" });
        toast.success("Add todo item", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  }

  return (
    <div className="todoList">
      <center>
        <h1 className="todo_header">Todo List</h1>
        <div className="todo_container">
          <input
            className="todo_input"
            onChange={(e) => {
              if (isEdit) {
                setTodoItem({ id: todoItem.id, data: e.target.value });
              } else {
                setTodoItem({ id, data: e.target.value });
              }
            }}
            type="text"
            placeholder="what you want to do ?"
            value={todoItem.data}
            name="data"
          />
          <button className="add_todo" onClick={addTodo}>
            {isEdit ? "update" : "Add todo"}
          </button>
        </div>
        <div className="todo_list_container">
          {todoList.map((i) => {
            return (
              <div className="todo_list_item" key={i.id}>
                <div className="todo_item">{i.data}</div>
                <button
                  className="todo_delete"
                  onClick={() => {
                    deleteTodo(i.id);
                    toast.success("Delete todo item", {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  }}
                >
                  delete
                </button>
                <button className="todo_update" onClick={() => editTodo(i.id)}>
                  edit
                </button>
              </div>
            );
          })}
        </div>
      </center>
    </div>
  );
}

export default TodoList;
