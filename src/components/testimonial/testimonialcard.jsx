import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg h-full flex flex-col justify-between">
            <div className="flex items-center mt-4">
                <img className="h-12 w-12 rounded-full object-cover mr-4" src={testimonial.image} alt={`Avatar of ${testimonial.author}`} />
                <p className="text-gray-800 font-semibold">{testimonial.author}</p>
            </div>
            <p className="text-gray-800 mb-4 flex-1">{testimonial.text}</p>
            
            
        </div>
    );
};

export default TestimonialCard;
