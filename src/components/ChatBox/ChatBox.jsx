import React from "react";
import "./ChatBox.css";
import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg";
import comments from "../../../src/utils/data.json";
const ChatBox = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings c-container">
        <div className="ctrls">
          {comments.comments.map((item, i) => (
            <div className="commentCard" key={i}>
              <div className="frame">
                <div>
                  <span>
                    <button>{<img src={plus} alt="plus" />}</button>
                    <h1>{item.score}</h1>
                    <button>{<img src={minus} alt="plus" />}</button>
                  </span>
                </div>
                <div className="userProfile">
                  <div className="userInfo">
                    <img src={item.user.image.png} alt={item.username} />
                    <h3>{item.username}</h3>
                    <p>{item.createdAt}</p>
                  </div>
                  <p>{item.content}</p>
                </div>
              </div>

              <div className="replies">
                {item.replies.map((rep, z) => (
                  <div className="replyCard" key={z}>
                    <div className="frame">
                      <div>
                        <span>
                          <button>{<img src={plus} alt="plus" />}</button>
                          <h1>{rep.score}</h1>
                          <button>{<img src={minus} alt="plus" />}</button>
                        </span>
                      </div>
                      <div className="userProfile">
                        <div className="userInfo">
                          <img src={rep.user.image.png} alt={item.username} />
                          <h3>{rep.username}</h3>
                          <p>{rep.createdAt}</p>
                        </div>
                        <p>{rep.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
