import React, { useRef } from "react";
import Button from "../Button/Button";
import "./singletask.scss";

const SingleTask = ({ task, taskList, setTaskList, setModalVisible }) => {
  const refTaskItem = useRef();
  //   const refModal = useRef();

  const deleteTask = (item, setTaskList) => {
    if (!item.checked) {
      refTaskItem.current.classList.add("delete-task");
      console.log(refTaskItem.current);
      setTimeout(() => {
        setTaskList(taskList.filter((task) => task.id !== item.id));
      }, 1000);
    }
  };

  const showModal = () => {
    if (!task.checked) {
      setModalVisible({ task: task.task, checked: task.checked, id: task.id });
    }
  };

  return (
    <li ref={refTaskItem} className={task.checked ? "task__item task__item_checked" : "task__item"}>
      <div className="task__group">
        <label className="task__label">
          <input
            type="checkbox"
            checked={task.checked}
            className="task__checkbox"
            onChange={() => {
              setTaskList(
                taskList.map((item) => {
                  //*частый кейс
                  if (item.id === task.id) return { ...item, checked: !item.checked };
                  else return item;
                })
              );
            }}
          />
        </label>
        <p className={task.checked ? "task__text" : "task__text task__text_active"} onClick={showModal}>
          {task.task}
        </p>
      </div>
      <Button
        name="Delete"
        type="button"
        addClass={task.checked ? "task__delete" : "task__delete task__delete_active"}
        onClick={() => deleteTask(task, setTaskList)}
      />
    </li>
  );
};

export default SingleTask;
