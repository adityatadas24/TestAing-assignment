import React, { useState } from "react";
import "./style.css";

import unpin from "../components/assets/push-pin.png";
import addnote from "../components/assets/addnotes.png";

const Sidebar = ({ notes, onSelectNote, onAddNote, onTogglePin }) => {
  const [searchQuery, setSearchQuery] = useState("");

 
  const filteredNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            borderBottom: "1px solid gray",
          }}
        >
          <h4>Add Notes</h4>

          <img
            className="new-note-btn"
            onClick={onAddNote}
            src={addnote}
            alt=""
          />
          
        </div>

        <input
          type="text"
          placeholder="Search all notes and tags"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Notes List */}
      <div className="notes-list">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className={`note-item ${note.pinned ? "pinned" : ""}`}
              onClick={() => onSelectNote(note)}
            >
              <div className="note-item-content">
                <p className="note-text">
                  {note.content.substring(0, 30) || "New Note..."}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    onTogglePin(note.id);
                  }}
                  className="pin-btn"
                >
                  {note.pinned ? (
                    <img style={{ width: "15px" }} src={unpin} />
                  ) : (
                    "📌"
                  )}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-notes">No notes found</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
