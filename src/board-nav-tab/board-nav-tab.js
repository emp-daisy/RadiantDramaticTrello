import React from "react";
import "./board-nav-tab.scss";

const BoardNavTab = () => {
  return (
    <div className="board-nav-tab">
      <div className="nav-icon-wrapper main">
        <button>
          <span className="svg-icons">
            <svg
              width="24"
              height="24"
              role="presentation"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 7v8a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2zm2 0v8h2V7H4zm5 0v6a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2zm2 0v6h2V7h-2zm5 10V7a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zm2 0V7h2v10h-2z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span className="text">Board</span>
        </button>
        <div className="title">
          <span>Project Management</span>
        </div>
        <button>
          <span className="svg-icons star"></span>
        </button>
        <hr />
        <button>
          <span className="svg-icons org"></span>
          <span className="text">Trello Inc</span>
        </button>
        <hr />

        <button>
          <span className="svg-icons public"></span>
          <span className="text">Public</span>
        </button>
        <hr />
      </div>
      <div className="nav-icon-wrapper members">
        <div className="">
          <div className="member">JH</div>
          <div className="member">AJ</div>
          <div className="member">BH</div>
          <div className="member">JZ</div>
          <div className="member-count member">+5</div>
        </div>
      </div>
      <div className="nav-icon-wrapper main end">
        <button>
          <span className="svg-icons">
            <svg
              width="24"
              height="24"
              role="presentation"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 4v1H4.995A1.994 1.994 0 003 6.994v12.012C3 20.106 3.893 21 4.995 21h14.01A1.994 1.994 0 0021 19.006V6.994A1.996 1.996 0 0019.005 5H18V4a1 1 0 00-2 0v1H8V4a1 1 0 00-2 0zm-.75 5.571v8.147c0 .555.444.996.993.996h11.515a.998.998 0 00.992-.996V9.571H5.25zM9 13v-2.001H7V13h2zm8-2.001V13h-2v-2.001h2zM11 13h2.001v-2.001H11V13zm-4 4v-2h2v2H7zm4 0h2.001v-2H11v2zm6-2v2h-2v-2h2z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span className="text">Calendar</span>
        </button>
        <button>
          <span className="svg-icons menu"></span>
          <span className="text">Show Menu</span>
        </button>
      </div>
    </div>
  );
};

export default BoardNavTab;
