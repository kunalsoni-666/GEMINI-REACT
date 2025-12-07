import { assets } from "../../assets/assets/assets.js";
import "./main.css";
import { useContext } from "react";
import { ChatContext } from "../../context/context.jsx";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(ChatContext);
  return (
    <div className="main">
      <div className="nav">
        <p>GEMINI</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,kunal..</span>
              </p>
              <p>
                <span>How can I assist you?</span>
              </p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  onSent(
                    "Suggest beautiful places to see on an upcoming road trip"
                  )
                }
              >
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>
              <div
                className="card"
                onClick={() =>
                  onSent("Briefly summarize this concept: urban planning")
                }
              >
                <p>Briefly summarize this concept :urban planning</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>
              <div
                className="card"
                onClick={() =>
                  onSent(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
              >
                <p>Brainstrom team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>
              <div
                className="card"
                onClick={() =>
                  onSent("Improve the readability of the following code")
                }
              >
                <p>Improve the readability of the folling code</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>{" "}
            </div>{" "}
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data ">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input style={{width:"90rem"}}
            onChange={(E) => setInput(E.target.value)}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
          />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            {input ? (
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            ) : null}
          </div>
        </div>
        <p className="bottom-info">
          Gemini may display inaccurate info, including about people , so
          double-check its responses.Your privacy and Gemini App
        </p>
      </div>
    </div>
  );
};

export default Main;
