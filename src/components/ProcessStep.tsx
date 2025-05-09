
import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex">
      <div className="mr-6">
        <div className="h-12 w-12 bg-freight-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
        <div className="h-full w-0.5 bg-freight-200 mx-auto mt-2"></div>
      </div>
      <div className="pt-2 pb-8">
        <h3 className="text-xl font-semibold mb-2 text-freight-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
