import React from "react";

import "./modal.scss";

function Modal({ modalVisible, setModalVisible, taskList, setTaskList }) {
  const handleChange = (e) => {
    setModalVisible((prev) => {
      return { ...prev, task: e.target.value };
    });
  };

  const submitUpdate = () => {
    // setTaskList((prev) => { //! почему не работает?
    //   prev.map((item) => (item.id === modalVisible.id ? modalVisible : item));
    // });

    setTaskList(
      //todo if(modalVisible.task === ""){показать сообщение}
      taskList.map((item) => {
        if (item.id === modalVisible.id && modalVisible.task !== "") return { ...item, task: modalVisible.task };
        else return item;
      })
    );
  };
  const closeModal = () => {
    //!переписать на тернарник и в onCLick (что else?) modalVisible ? setModalVisible(null) : (onClick={modalVisible && setModalVisible(null)})
    if (modalVisible) {
      setModalVisible(null);
    }
  };

  window.addEventListener("keydown", (e) => {
    //!какой-то косяк, запускается много раз
    if (modalVisible && e.key === "Escape") {
      console.log(e.key);
      setModalVisible(null);
    }
  });

  return (
    <div className={`modal ${modalVisible ? "" : "hidden"} `}>
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
            setModalVisible(null);
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
  );
}

export default Modal;
