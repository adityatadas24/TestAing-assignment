
import React from "react";
import "./style.css";

import action from '../components/assets/action-menu.png'
const Navbar = ({ onSave, onDelete, onToggleMarkdown, onCopyLink, isMarkdown }) => {
  return (
    <div className="navbar">
      <div className="navbar-title"></div>
      <div className="navbar-actions">
        <div className="dropdown" style={{gap:'20px',marginTop:'30px'}}>
        <button style={{marginRight:'10px'}} onClick={onDelete}>Cancle</button>

            <button  onClick={onSave}>Saves</button>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
