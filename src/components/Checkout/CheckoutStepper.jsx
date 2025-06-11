import React from 'react';

const CheckoutStepper = ({ currentStep }) => {
  const steps = ['Cart', 'Shipping', 'Checkout'];

  return (
    <div className="w-full max-w-2xl mx-auto pt-12 pb-8 px-4">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isActive = currentStep === stepNumber;

          return (
            <React.Fragment key={step}>
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    isCompleted || isActive ? 'bg-orange-500 text-white' : 'border-2 border-orange-300 text-orange-400'
                  }`}
                >
                  {stepNumber}
                </div>
                <p className={`ml-3 font-semibold ${
                    isActive ? 'text-gray-800' : 'text-gray-500'
                  }`}
                >
                  {step}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-auto border-t-2 transition-colors duration-500 mx-4 ${
                    isCompleted ? 'border-orange-500' : 'border-gray-300'
                  }`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutStepper;