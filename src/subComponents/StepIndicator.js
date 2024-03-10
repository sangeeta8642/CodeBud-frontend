import React from 'react';
import '../Css Files/StepIndicator.css';

const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
          <div
          key={index}
          className={`step ${index === currentStep ? 'active' : ''}`}
          
          >
            {step}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
