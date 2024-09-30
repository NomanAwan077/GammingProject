import React, { useState } from "react";
import heroImage from "../../assets/images/hero-frame.png";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      customerStory: {
        image: heroImage,
        quote: "I use TLF to help me succeed",
        author: "Felix Lee, ADPList",
      },
      statistic: {
        percentage: "91%",
        description: "of customers recommend TLF Services",
      },
      successStory: {
        title:
          "How Just Dabao Saved 10 Hours and Reinvested Into Business Growth",
        image: heroImage,
      },
      review: {
        quote:
          "The good thing about TFL is that it saves a lot of time so I can do other things - the running of the business part.",
        author: "Jennifer Widjaja",
        rating: 5,
      },
    },
    // Add more testimonial objects here for additional slides
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What our clients think about TLF services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 relative rounded-lg overflow-hidden">
            <img
              src={testimonials[currentSlide].customerStory.image}
              alt="Customer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
              <div>
                <p className="text-white text-2xl font-bold mb-2">
                  "{testimonials[currentSlide].customerStory.quote}"
                </p>
                <p className="text-white">
                  {testimonials[currentSlide].customerStory.author}
                </p>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2"
              aria-label="Play video"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <div className="bg-blue-500 rounded-lg p-6 flex flex-col justify-center items-center text-white">
            <p className="text-6xl font-bold mb-2">
              {testimonials[currentSlide].statistic.percentage}
            </p>
            <p className="text-xl text-center">
              {testimonials[currentSlide].statistic.description}
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col justify-between">
            <h3 className="text-white text-xl font-bold mb-4">
              {testimonials[currentSlide].successStory.title}
            </h3>
            <img
              src={testimonials[currentSlide].successStory.image}
              alt="Success story"
              className="w-full h-40 object-cover rounded"
            />
          </div>
          <div className="bg-green-300 rounded-lg p-6 col-span-1 md:col-span-2">
            <p className="text-xl mb-4">
              "{testimonials[currentSlide].review.quote}"
            </p>
            <div className="flex justify-between items-center">
              <p className="font-bold">
                {testimonials[currentSlide].review.author}
              </p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[currentSlide].review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
