import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./add.scss";
import Button from "../Button/Button";

function Add({ taskList, setTaskList }) {
  const inputRef = useRef(); //* ~querySelector

  //* добавление task
  const addTask = (taskList, setTaskList) => {
    if (inputRef?.current?.value !== "") {
      setTaskList([{ task: inputRef.current.value, checked: false, id: uuidv4() }, ...taskList]);
      inputRef.current.value = "";
    }
  };

  return (
    <section className="page__add add">
      <div className="add__container">
        <h2 className="add__title">Please add your task</h2>
        <form
          action="post"
          className="add__form"
          onSubmit={(e) => {
            e.preventDefault();
            addTask(taskList, setTaskList);
          }}
        >
          <label className="add__label">
            <input
              ref={inputRef}
              type="text"
              className="add__text"
              placeholder="add new task"
              //* не нужен state, useRef
            />
            <Button name="Add" type="submit" addClass={"add__button"} />
          </label>
        </form>
      </div>
    </section>
  );
}

export default Add;
