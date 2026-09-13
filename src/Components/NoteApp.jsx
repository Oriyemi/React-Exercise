
import React, { useState } from "react";

function NotesApp() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React Learning",
      content: "Learn useState, useEffect and useReducer.",
    },
    {
      id: 2,
      title: "Project Ideas",
      content: "Build a notes app and expense tracker.",
    },
  ]);

  const [selectedNote, setSelectedNote] = useState(null);
  const [search, setSearch] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Select a note
  function handleSelectNote(note) {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  }

  // Create a new note
  function handleNewNote() {
    setSelectedNote(null);
    setTitle("");
    setContent("");
  }

  // Save a note
  function handleSave() {
    if (!title.trim() && !content.trim()) {
      return;
    }

    // Update existing note
    if (selectedNote) {
      setNotes((previousNotes) =>
        previousNotes.map((note) =>
          note.id === selectedNote.id
            ? {
                ...note,
                title,
                content,
              }
            : note
        )
      );

      setSelectedNote((previousNote) => ({
        ...previousNote,
        title,
        content,
      }));

      return;
    }

    // Create new note
    const newNote = {
      id: crypto.randomUUID(),
      title,
      content,
    };

    setNotes((previousNotes) => [
      ...previousNotes,
      newNote,
    ]);

    setSelectedNote(newNote);
  }

  // Delete a note
  function handleDelete() {
    if (!selectedNote) {
      return;
    }

    setNotes((previousNotes) =>
      previousNotes.filter(
        (note) => note.id !== selectedNote.id
      )
    );

    setSelectedNote(null);
    setTitle("");
    setContent("");
  }

  // Search notes
  const filteredNotes = notes.filter((note) => {
    return (
      note.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      note.content
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Notes App
      </h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">

        {/* NOTES LIST */}
        <div className="rounded-lg bg-white p-4 shadow">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">
              My Notes
            </h2>

            <button
              onClick={handleNewNote}
              className="rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
            >
              + New
            </button>
          </div>

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search notes..."
            className="mb-4 w-full rounded border p-2 outline-none focus:border-blue-500"
          />

          <div className="space-y-2">
            {filteredNotes.map((note) => (
              <button
                key={note.id}
                onClick={() => handleSelectNote(note)}
                className={`w-full rounded p-3 text-left ${
                  selectedNote?.id === note.id
                    ? "bg-blue-100"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <h3 className="font-bold">
                  {note.title || "Untitled"}
                </h3>

                <p className="truncate text-sm text-gray-600">
                  {note.content}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* NOTE EDITOR */}
        <div className="rounded-lg bg-white p-4 shadow md:col-span-2">
          <h2 className="mb-4 text-xl font-bold">
            {selectedNote ? "Edit Note" : "New Note"}
          </h2>

          <input
            type="text"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            placeholder="Note title"
            className="mb-4 w-full rounded border p-3 text-xl font-bold outline-none focus:border-blue-500"
          />

          <textarea
            value={content}
            onChange={(event) =>
              setContent(event.target.value)
            }
            placeholder="Write your note..."
            className="h-80 w-full resize-none rounded border p-3 outline-none focus:border-blue-500"
          />

          <div className="mt-4 flex gap-3">
            <button
              onClick={handleSave}
              className="rounded bg-green-500 px-5 py-2 text-white hover:bg-green-600"
            >
              Save
            </button>

            {selectedNote && (
              <button
                onClick={handleDelete}
                className="rounded bg-red-500 px-5 py-2 text-white hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default NotesApp;

