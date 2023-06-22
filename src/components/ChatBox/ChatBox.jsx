import React, { Component } from "react";
// import { useState } from "react";
import "./ChatBox.css";
import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg";
import reply from "../../images/icon-reply.svg";
import edit from "../../images/icon-edit.svg";
import del from "../../images/icon-delete.svg";

import comments from "../../../src/utils/data.json";
class ChatBox extends Component {
  // const [texts, setTexts] = useState();
  state = { click: false };

  handleClick = () => {
    this.setState({ click: !this.state.click });
  };

  render() {
    return (
      <section className="c-wrapper">
        <div className="paddings c-container">
          <div className="ctrls">
            {comments.comments.map((item, i) => (
              <div className="commentCard" key={i}>
                <div className="frame">
                  <div>
                    <span className="btnFrame">
                      <button>{<img src={plus} alt="plus" />}</button>
                      <h1
                        style={{
                          color: "var(--Moderate-blue)",
                          fontSize: "14px",
                        }}
                      >
                        {item.score}
                      </h1>
                      <button>{<img src={minus} alt="plus" />}</button>
                    </span>
                  </div>
                  <div className="userProfile">
                    <div className="userInfo">
                      <img
                        src={item.user.image.png}
                        alt={item.user.username}
                        width={30}
                      />
                      <h3>{item.user.username}</h3>
                      <p>{item.createdAt}</p>
                      <p className="resp">
                        <img src={reply} alt="reply" /> Reply
                      </p>
                    </div>
                    <p>{item.content}</p>
                  </div>
                </div>

                <div className="replies">
                  {item.replies.map((rep, z) => (
                    <div className="replyCard" key={z}>
                      <div className="frame respondent">
                        <div>
                          <span className="btnFrame">
                            <button>{<img src={plus} alt="plus" />}</button>
                            <h1
                              style={{
                                color: "var(--Moderate-blue)",
                                fontSize: "14px",
                              }}
                            >
                              {rep.score}
                            </h1>
                            <button>{<img src={minus} alt="plus" />}</button>
                          </span>
                        </div>
                        <div className="userProfile">
                          <div className="userInfo">
                            <img
                              src={rep.user.image.png}
                              alt={item.user.username}
                              width={30}
                            />
                            <h3>{rep.user.username}</h3>
                            {rep.id === 4 ? (
                              <span
                                style={{
                                  backgroundColor: "var(--Moderate-blue)",
                                  color: "var(--White)",
                                  padding: "0 3px",
                                  borderRadius: "3px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginRight: "8px",
                                }}
                              >
                                you
                              </span>
                            ) : (
                              ""
                            )}
                            <p>{rep.createdAt}</p>
                            <p className="resp">
                              {rep.id === 4 ? <img src={del} alt="del" /> : ""}
                              {rep.id === 4 ? "Delete" : ""}

                              <img
                                src={rep.id === 4 ? edit : reply}
                                alt="reply"
                              />
                              {rep.id === 4 ? ("Delete", "Edit") : "Reply"}
                            </p>
                          </div>
                          <p>
                            <a href="index.jsx">@{rep.replyingTo}</a>
                            {" " + rep.content}
                          </p>
                        </div>
                      </div>
                      <div className="editComment">
                        <div className="frame">
                          <img
                            src={comments.currentUser.image.png}
                            alt={comments.currentUser.username}
                            width={30}
                            style={{ marginRight: "10px" }}
                          />
                          <textarea
                            style={{
                              flex: 1,
                              borderColor: "var(--Grayish-Blue)",
                            }}
                            placeholder="Add a comment..."
                            rows={4}
                            value={""}
                            onSelect={() => {}}
                          />
                          <button
                            type="submit"
                            style={{
                              backgroundColor: "var(--Moderate-blue)",
                              border: 0,
                              outline: 0,
                              padding: "9px 25px",
                              color: "var(--White)",
                              marginLeft: "10px",
                            }}
                          >
                            SEND
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="editComment">
                  <div className="frame">
                    <img
                      src={comments.currentUser.image.png}
                      alt={comments.currentUser.username}
                      width={30}
                      style={{ marginRight: "10px" }}
                    />
                    <textarea
                      style={{ flex: 1, borderColor: "var(--Grayish-Blue)" }}
                      placeholder="Add a comment..."
                      rows={4}
                      value={""}
                      onSelect={() => {}}
                    />
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "var(--Moderate-blue)",
                        border: 0,
                        outline: 0,
                        padding: "9px 25px",
                        color: "var(--White)",
                        marginLeft: "10px",
                      }}
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default ChatBox;
