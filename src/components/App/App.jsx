import React, { useEffect, useState } from "react";

import Add from "../Add/Add";
import Task from "../Task/Task";

import "./app.scss";
import "./_container.scss";

import "./_custom.scss";
import "./_focus.scss";
import "./_font.scss";

import "./_page.scss";
import "./_variables.scss";
import Modal from "../Modal/Modal";

function App() {
  const [taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem("taskList")) || [];
  });

  const [modalVisible, setModalVisible] = useState(null);
  // console.log(modalVisible);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="app">
      <main className="page">
        <h1 className="general__title">MyReactToDoList</h1>
        <Add taskList={taskList} setTaskList={setTaskList} />
        <Task taskList={taskList} setTaskList={setTaskList} setModalVisible={setModalVisible} />
        {modalVisible && (
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        )}
      </main>
    </div>
  );
}

export default App;
