import React, { useState } from "react";
import DiseaseDetector from "./components/DiseaseDetector";
import Chatbot from "./components/Chatbot";
import Home from "./components/Home";
import Info from "./components/Info";


export default function App() {
  const [selected, setSelected] = useState("Disease Detector");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Header */}
      <header className="bg-green-700 text-white p-4 flex space-x-6">
        {["Home", "Disease Detector", "Chatbot","Info"].map((page) => (
          <button
            key={page}
            onClick={() => setSelected(page)}
            className={`px-4 py-2 rounded-md font-semibold ${
              selected === page ? "bg-white text-green-700" : "hover:bg-green-600"
            }`}
          >
            {page}
          </button>
        ))}
      </header>

      {/* Main Content */}
      <main className="p-6">
        {selected === "Home" && <Home />}
        {selected === "Disease Detector" && <DiseaseDetector />}
        {selected === "Chatbot" && <Chatbot />}
        {selected === "Info" && <Info />}
       
      </main>
    </div>
  );
}
