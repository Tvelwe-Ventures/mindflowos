import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVision Inc",
    quote: "Transformed our quarterly planning process. What used to take weeks now happens in real-time.",
    rating: 5
  },
  {
    name: "Mark Rodriguez",
    role: "Strategy Director, Global Solutions",
    quote: "The AI assistance is like having a strategy consultant on demand. Game-changing for our team.",
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <div className="mt-16 grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, idx) => (
        <Card 
          key={idx} 
          className="bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-up"
          style={{ animationDelay: `${idx * 200}ms` }}
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 italic">{testimonial.quote}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TestimonialSection;