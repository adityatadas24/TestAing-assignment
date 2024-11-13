import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import { collection, addDoc, updateDoc, deleteDoc, onSnapshot, doc } from "firebase/firestore";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  // Fetch notes
  useEffect(() => {
    const notesCollectionRef = collection(db, "notes");
    const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
      const notesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notesData);
    });

    return () => unsubscribe();
  }, []);

  // Add a new note
  const addNewNote = async () => {
    const newNote = {
      content: "New Note...",
      createdAt: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "notes"), newNote);
      setSelectedNote({ id: docRef.id, ...newNote });
    } catch (error) {
      console.error("Error adding note: ", error);
    }
  };

  // Update the content
  const updateNote = async (id, content) => {
    const noteRef = doc(db, "notes", id);
    try {
      await updateDoc(noteRef, { content });
    } catch (error) {
      console.error("Error updating note: ", error);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    const noteRef = doc(db, "notes", id);
    try {
      await deleteDoc(noteRef);
      setSelectedNote(null);
    } catch (error) {
      console.error("Error deleting note: ", error);
    }
  };

  const togglePin = async (id) => {
    const noteRef = doc(db, "notes", id);
    const note = notes.find((note) => note.id === id);
    try {
      await updateDoc(noteRef, { pinned: !note.pinned });
      setNotes(notes.map((note) => (note.id === id ? { ...note, pinned: !note.pinned } : note)));
    } catch (error) {
      console.error("Error updating pinned status: ", error);
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        notes={notes}
        onSelectNote={(note) => setSelectedNote(note)}
        onAddNote={addNewNote}
        onTogglePin={togglePin}
      />
      <Editor
        selectedNote={selectedNote}
        onUpdateNote={updateNote}
        onDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
