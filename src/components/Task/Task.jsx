import React from "react";
import "./task.scss";
import SingleTask from "../SingleTask/SingleTask";

function Task({ taskList, setTaskList, setModalVisible }) {
  return (
    <>
      {taskList?.length > 0 ? (
        <ul className="task__container">
          {taskList.map((task) => (
            <SingleTask
              key={task.id}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
              setModalVisible={setModalVisible}
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
