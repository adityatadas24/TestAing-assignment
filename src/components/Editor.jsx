
import React, { useState, useEffect } from "react";
import "./style.css";
import { marked } from "marked";
import Navbar from "../components/Navbar";

const Editor = ({ selectedNote, onUpdateNote, onDeleteNote }) => {
  const [content, setContent] = useState("");
  const [isMarkdown, setIsMarkdown] = useState(false);

  useEffect(() => {
    if (selectedNote) {
      setContent(selectedNote.content || "");
    }
  }, [selectedNote]);

  const handleUpdate = () => {
    if (selectedNote && content !== selectedNote.content) {
      onUpdateNote(selectedNote.id, content);
    }
  };

  const handleDelete = () => {
    if (selectedNote) {
      onDeleteNote(selectedNote.id);
    }
  };

  const handleCopyLink = () => {
    if (selectedNote) {
      const noteLink = `${window.location.origin}/notes/${selectedNote.id}`;
      navigator.clipboard.writeText(noteLink).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  };

  const toggleMarkdown = () => {
    setIsMarkdown((prev) => !prev);
  };

  return (
    <div className="editor-container">
          <Navbar
            onSave={handleUpdate}
            onDelete={handleDelete}
            onToggleMarkdown={toggleMarkdown}
            onCopyLink={handleCopyLink}
            isMarkdown={isMarkdown}
          />
      {selectedNote ? (
        <>
        
          <div className="editor">
            {isMarkdown ? (
           
              <div
                className="markdown-preview"
                dangerouslySetInnerHTML={{ __html: marked(content) }}
              />
            ) : (
            
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing your note here..."
              />
            )}
          </div>
        </>
      ) : (
        <div className="no-notes">Select a note to edit</div>
      )}
    </div>
  );
};

export default Editor;
