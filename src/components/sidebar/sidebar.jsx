import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets/assets.js";
import Context from "../../context/context.jsx";
import { ChatContext } from "../../context/context.jsx";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompt, setRecentPrompt, newChat } =
    useContext(ChatContext);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
    setExtended(false);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        <div onClick={() => newChat()} className="new_chat">
          <img src={assets.plus_icon} alt="New Chat Icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent_title">Recent</p>
              {previousPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)}  className="recent-entry">
                  <img src={assets.message_icon} alt="Message Icon" />
                  <p>{item.slice(0, 18)}</p>
                </div>
              );
            })}
            {/* <div className="recent_entry">
              <img src={assets.message_icon} alt="Message Icon" />
              <p>What is react...</p>
            </div> */}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom_item recent_entry">
          {extended ? <img src={assets.question_icon} alt="Help Icon" /> : null}
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom_item recent_entry">
          {extended ? (
            <img src={assets.history_icon} alt="Activity Icon" />
          ) : null}
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom_item recent_entry">
          <img src={assets.setting_icon} alt="Settings Icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
