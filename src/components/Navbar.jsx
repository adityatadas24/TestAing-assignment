
import React from "react";
import "./style.css";

import action from '../components/assets/action-menu.png'
const Navbar = ({ onSave, onDelete, onToggleMarkdown, onCopyLink, isMarkdown }) => {
  return (
    <div className="navbar">
      <div className="navbar-title"></div>
      <div className="navbar-actions">
        <div className="dropdown">
          <img className="dropdown-btn" src={action} alt="" />
          <div className="dropdown-content">
            <button onClick={onSave}>Save</button>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onToggleMarkdown}>
              {isMarkdown ? "Edit" : "Markdown"}
            </button>
            <button onClick={onCopyLink}>Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
