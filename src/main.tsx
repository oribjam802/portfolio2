import React from "react";
import ReactDOM from "react-dom/client";
import App from "@src/App.tsx";

// DOMの読み込み完了を待つ
document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("root");
  if (element) {
    ReactDOM.createRoot(element).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});
