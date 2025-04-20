import React from "react";
import { Leaf, Bot, Camera, ShieldCheck } from "lucide-react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-gray-800 font-[Inter]">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-green-800 mb-6 leading-tight">
            🌿 Empower Your Crops <br /> with AI Diagnosis
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Upload your crop images and get instant disease detection, prevention tips, and AI-based recommendations.
          </p>
          <a
            href="/detection"
            className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition duration-300"
          >
            🚀 Get Started Now
          </a>
        </div>
      </section>

      {/* Background Image Section */}
      <section
        className="h-[450px] bg-cover bg-center bg-no-repeat rounded-3xl mx-6 shadow-2xl"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dtpgi0zck/image/upload/s--KuHP6sEY--/c_fill,h_580,w_860/v1/EducationHub/photos/crops-growing-in-thailand.jpg')",
        }}
      >
        {/* Optional overlay text */}
        <div className="h-full w-full bg-black/30 flex items-center justify-center rounded-3xl">
          <h3 className="text-white text-3xl font-semibold">
            AI for Smart Crop Diagnosis
          </h3>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white rounded-t-3xl mt-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-green-700 mb-16">
            🌟 App Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="p-6 rounded-xl bg-green-50 shadow-md hover:shadow-xl transition">
              <Camera className="mx-auto text-green-600" size={44} />
              <h4 className="text-xl font-semibold mt-4">Image Upload</h4>
              <p className="text-gray-600 mt-2">Upload leaf images for fast detection.</p>
            </div>
            <div className="p-6 rounded-xl bg-green-50 shadow-md hover:shadow-xl transition">
              <Bot className="mx-auto text-green-600" size={44} />
              <h4 className="text-xl font-semibold mt-4">AI Diagnosis</h4>
              <p className="text-gray-600 mt-2">Smart predictions for 32+ diseases.</p>
            </div>
            <div className="p-6 rounded-xl bg-green-50 shadow-md hover:shadow-xl transition">
              <Leaf className="mx-auto text-green-600" size={44} />
              <h4 className="text-xl font-semibold mt-4">Chatbot</h4>
              <p className="text-gray-600 mt-2">Information about crops.</p>
            </div>
            <div className="p-6 rounded-xl bg-green-50 shadow-md hover:shadow-xl transition">
              <ShieldCheck className="mx-auto text-green-600" size={44} />
              <h4 className="text-xl font-semibold mt-4">Prevention Tips</h4>
              <p className="text-gray-600 mt-2">Remedies & prevention suggestions included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-t from-white to-green-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-3xl font-bold text-green-800 mb-6">Why Choose CropCare AI?</h3>
          <p className="text-lg text-gray-700">
            In rural and urban farming areas alike, early disease detection is crucial. CropCare AI
            helps farmers save time and money with instant plant analysis — using just a photo.
            It’s fast, reliable, and made to empower the agriculture industry.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-green-700 text-white py-8 mt-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-medium mb-2">📬 Contact Us: cropcare@example.com</p>
          <p className="text-sm opacity-90">© 2025 CropCare AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
