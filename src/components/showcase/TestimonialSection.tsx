import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from './showcaseData';

const TestimonialSection = () => {
  return (
    <div className="mt-16 grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, idx) => (
        <Card key={idx} className="bg-white">
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