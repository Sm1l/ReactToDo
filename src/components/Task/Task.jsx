import React from "react";
import "./task.scss";
import SingleTask from "../SingleTask/SingleTask";
// import { useRef } from "react";
//todo------test-----------------
// import styled, { keyframes } from "styled-components";
// import { shake } from "react-animations";
//todo------test-----------------

function Task({ taskList, setTaskList, setModalVisible }) {
  return (
    <>
      {taskList?.length > 0 ? (
        <ul className="task__container">
          {taskList.map((task) => (
            // <li key={task.id} className={task.checked ? "task__item task__item_checked" : "task__item"}>
            //   <div className="task__group">
            //     <label className="task__label">
            //       {/* check */}
            //       <input
            //         type="checkbox"
            //         checked={task.checked}
            //         className="task__checkbox"
            //         onChange={() => {
            //           setTaskList(
            //             taskList.map((item) => {
            //               //*частый кейс
            //               if (item.id === task.id) return { ...item, checked: !item.checked };
            //               else return item;
            //             })
            //           );
            //         }}
            //       />
            //     </label>
            //     <p
            //       className={task.checked ? "task__text" : "task__text task__text_active"}
            //       onClick={() => {
            //         !task.checked && setModalVisible({ task: task.task, checked: task.checked, id: task.id });
            //       }}
            //     >
            //       {task.task}
            //     </p>
            //   </div>
            //   <Button
            //     name="Delete"
            //     type="button"
            //     addClass={task.checked ? "task__delete" : "task__delete task__delete_active"}
            //     onClick={() => deleteTask(task, setTaskList)}
            //   />
            // </li>
            <SingleTask
              key={task.id}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
              setModalVisible={setModalVisible}
              // refModal={refModal}
            />
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task yet</p>
        </div>
      )}
    </>
  );
}
export default Task;
