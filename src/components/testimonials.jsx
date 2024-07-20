// Testimonials.js
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'MedGenie has been incredibly helpful for managing my health records.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'I love the convenience and ease of booking appointments through MedGenie!',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    feedback: 'Great platform for connecting with healthcare providers.',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="w-full md:w-1/3 px-4 mb-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-800 text-base">{testimonial.feedback}</p>
                <p className="text-gray-600 mt-4">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
