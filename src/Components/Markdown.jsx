
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(
    "# Hello World\n\nStart writing **Markdown** here..."
  );

  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  function handleClear() {
    setMarkdown("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Markdown Editor
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* EDITOR */}
        <div className="rounded-lg bg-white p-4 shadow">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">
              Markdown
            </h2>

            <button
              onClick={handleClear}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Clear
            </button>
          </div>

          <textarea
            value={markdown}
            onChange={handleChange}
            placeholder="Write your Markdown here..."
            className="h-[500px] w-full resize-none rounded border border-gray-300 p-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* PREVIEW */}
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Preview
          </h2>

          <div className="min-h-[500px] rounded border border-gray-300 p-4">
            <ReactMarkdown>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MarkdownEditor;

