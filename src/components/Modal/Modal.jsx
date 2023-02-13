import React, { useEffect } from "react";

import "./modal.scss";

function Modal({ modalVisible, setModalVisible, taskList, setTaskList }) {
  useEffect(() => {
    const escListener = (e) => {
      if (modalVisible && e.key === "Escape") {
        console.log(e.key);
        closeModal();
      }
    };
    window.addEventListener("keydown", escListener);

    return () => {
      window.removeEventListener("keydown", escListener);
    };
  }, []);

  const handleChange = (e) => {
    setModalVisible((prev) => {
      return { ...prev, task: e.target.value };
    });
  };

  //*function update task
  const submitUpdate = () => {
    setTaskList(
      //todo if(modalVisible.task === ""){показать сообщение}
      taskList.map((item) => {
        if (item.id === modalVisible.id && modalVisible.task !== "") return { ...item, task: modalVisible.task };
        else return item;
      })
    );
  };

  //*function close
  const closeModal = () => {
    if (modalVisible) {
      setModalVisible(null);
    }
  };

  return (
    <>
      <div className={`modal ${modalVisible ? "show-modal" : "hidden"} `}>
        <div className="modal__container">
          <button className="modal__close button " type="button" onClick={closeModal}>
            Close
          </button>
          <form
            action=""
            className="modal__form"
            onSubmit={(e) => {
              e.preventDefault();
              submitUpdate();
              closeModal();
            }}
          >
            <label htmlFor="modal" className="modal__label">
              Edit task:
            </label>
            <input
              className="modal__input"
              type="text"
              name="modal"
              value={`${modalVisible.task}`}
              autoFocus
              onChange={handleChange}
            />
            <button className="modal__button button" type="submit">
              Change
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
