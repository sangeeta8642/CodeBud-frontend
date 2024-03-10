import React, { useState } from 'react';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2>Step 1: Shipping Information</h2>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <br />
            <button onClick={handleNext}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Payment Information</h2>
            <label>Payment Method:</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
            <br />
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Review and Confirm</h2>
            <p>Name: {formData.name}</p>
            <p>Address: {formData.address}</p>
            <p>Payment Method: {formData.paymentMethod}</p>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleSubmit}>Place Order</button>
          </div>
        );
      default:
        return null;
    }
  };

  const stepIndicator = () => {
    return (
      <div>
        <p>Step {currentStep} of 3</p>
      </div>
    );
  };

  const handleSubmit = () => {
    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {stepIndicator()}
      <h1>Checkout</h1>
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;