import React from "react";

const Donate = () => {
  return (
    <section className="w-full px-6 py-12 bg-[#f9fafb]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          हर पीड़ित को चाहिए एक रक्षक ❤️
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          हम 1,00,000 रुपये जुटा रहे हैं RakshakAI App के लॉन्च के लिए।  
          आपकी छोटी सी मदद किसी की ज़िंदगी बदल सकती है।
        </p>

        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: "42%" }} // 🔁 यहां progress change कर सकते हो
          ></div>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          ₹42,000 raised out of ₹1,00,000
        </p>

        <a
          href="https://example.com/donate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          अभी दान करें
        </a>
      </div>
    </section>
  );
};

export default Donate;
