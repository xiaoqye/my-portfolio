"use client";
import { useState } from "react";

const items = [
  {
    key: "intern",
    img: "/highlights/Intern presentation.jpg",
    text: "Internship presentation experience — communicating results clearly to stakeholders.",
  },
  {
    key: "msba",
    img: "/highlights/MSBA.jpg",
    text: "MS in Business Analytics--Toolbox Class, hands-on work with Python, SQL, Tableau, and analytics projects.",
  },
  {
    key: "ambassador",
    img: "/highlights/Ambassador.jpg",
    text: "Student ambassador experience — supporting community engagement and welcoming new members.",
  },
  {
    key: "ra",
    img: "/highlights/My RA Event- Chinese New Year.jpg",
    text: "Organized and support a Chinese New Year community event — teamwork and execution.",
  },
  {
    key: "networking",
    img: "/highlights/networking event.jpg",
    text: "Active participation in networking events — building professional relationships.",
  },
  {
    key: "usher",
    img: "/highlights/Usher.jpg",
    text: "Two years as an usher — strong customer service mindset, fast response, and handling real-time needs.",
  },
  {
    key: "climbing",
    img: "/highlights/Climbing.jpg",
    text: "Climbing builds focus, problem-solving skills, and resilience under pressure.",
  },
  {
    key: "dog",
    img: "/highlights/My dog.jpg",
    text: "Caring for my dog teaches responsibility, patience, and consistency.",
  },
  {
    key: "food",
    img: "/highlights/Hotpot-foodie.jpg",
    text: "Food lover — exploring cuisines is my favorite way to recharge.",
  },
];

type Item = typeof items[0];

export default function Highlights() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  
  const goToNext = () => {
    if (!selectedItem) return;
    const currentIndex = items.findIndex(item => item.key === selectedItem.key);
    const nextIndex = (currentIndex + 1) % items.length;
    setSelectedItem(items[nextIndex]);
  };

  const goToPrevious = () => {
    if (!selectedItem) return;
    const currentIndex = items.findIndex(item => item.key === selectedItem.key);
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setSelectedItem(items[prevIndex]);
  };

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
      
      {/* Single row of images */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => setSelectedItem(item)}
            className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-xl hover:opacity-90 transition cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.key}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Modal/Lightbox when image is clicked */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="p-6">
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="float-right text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
              
              {/* Large image */}
              <div className="w-full h-96 mb-4 clear-both flex items-center justify-center">
                <img
                  src={selectedItem.img}
                  alt={selectedItem.key}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Description text */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedItem.text}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}