import { useState } from "react";
import banner from "../../assets/images/banner.webp";

export default function FAQ() {
  const items = [
    {
      title: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Is it styled?",
      content: "Yes. It comes with default styles that match the other components aesthetic.",
    },
    {
      title: "Is it animated?",
      content: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen"
      style={{
        backgroundColor: "#934B18",
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="mt-12 text-4xl md:text-7xl mb-6 md:mb-10 pb-3 font-bold bg-gradient-to-r from-secondary to-white inline-block text-transparent bg-clip-text text-center px-4">
        Frequently Asked Questions
      </h2>
      <div
        className="w-full max-w-[90%] md:max-w-[70%] rounded-lg shadow-md"
        style={{ backgroundColor: "#DE9E54" }}
      >
        {items.map((item, index) => (
          <div key={index} className="border-b last:border-b-0">
            <button
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg md:text-2xl font-semibold">{item.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-screen px-4 py-2" : "max-h-0"
              }`}
            >
            <p className="text-lg md:text-l text-white font-montserrat">{item.content}</p>            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
