import React from "react";

export default function Sidebar({ selected, onSelect }) {
  const buttons = ["Home", "Detect Disease", "Chatbot","Crop Info"];

  return (
    <div className="bg-gray-800 text-white w-48 min-h-screen p-4 space-y-4">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => onSelect(btn)}
          className={`block w-full text-left px-4 py-2 rounded-lg ${
            selected === btn ? "bg-green-600" : "hover:bg-gray-700"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
