import React, { useContext } from "react";
import ToastContext from "../context/ToastContext";

function Toast() {
  const { toasts, showToast } = useContext(ToastContext);

  return (
    <div>
      <button
        onClick={() => showToast("Profile updated successfully")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Show Toast
      </button>

      <div className="fixed top-5 right-5 space-y-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toast;