import React from 'react';

const Todo = ({ text, todos, todo, setTodos }) => {
  const deleteHandeler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}{' '}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className=" fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandeler}>
        <i className=" fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
