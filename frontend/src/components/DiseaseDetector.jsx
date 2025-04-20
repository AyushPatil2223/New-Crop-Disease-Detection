import React, { useState } from "react";

export default function DiseaseDetector() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setResult(null); // Reset previous result
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log("Prediction result:", data); // Debugging log
      setResult(data);
    } catch (err) {
      console.error("Prediction error:", err);
      setResult({ error: "Something went wrong!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200 p-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          🌿 Plant Disease Detector
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 mb-4"
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-[400px] object-contain rounded-xl mb-4 border"
          />
        )}

        <button
          onClick={handleUpload}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 ease-in-out"
        >
          {loading ? "Predicting..." : "Predict"}
        </button>

        {result && result.prediction && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
            <h3 className="text-xl font-semibold">🌱 Prediction Result</h3>
            <p className="mt-2 text-lg">
              <strong>Disease:</strong> {result.prediction}
            </p>
          </div>
        )}

        {result && result.error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-200 rounded-xl text-red-700">
            {result.error}
          </div>
        )}
      </div>
    </div>
  );
}
