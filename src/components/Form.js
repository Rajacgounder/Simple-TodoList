import React from 'react';

const Form = ({ setChange, todos, setTodos, change, setStatus }) => {
  const inputTextHandeler = (e) => {
    setChange(e.target.value);
  };

  const submitTodoList = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: change, completed: false, id: Math.random() * 1000 },
    ]);
    setChange([]);
  };
  const statusHandeler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={change}
          className="todo-input"
          onChange={inputTextHandeler}
        />
        <button className="todo-button" type="submit" onClick={submitTodoList}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={statusHandeler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
