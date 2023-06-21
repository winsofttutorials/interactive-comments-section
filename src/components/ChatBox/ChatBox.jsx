import React from "react";
import "./ChatBox.css";
import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg";
const ChatBox = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings c-container">
        <div className="ctrls">
          <span>
            <button>{<img src={plus} alt="plus" />}</button>
            <h3>{}</h3>
            <button>{<img src={minus} alt="minus" />}</button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
