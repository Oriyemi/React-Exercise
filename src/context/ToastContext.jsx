import { createContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function showToast(message, type = "success") {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      type,
    };

    setToasts((previousToasts) => [
      ...previousToasts,
      newToast,
    ]);
  }

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastContext;