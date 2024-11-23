import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <p className="text-lg font-semibold text-gray-700">
          Cargando información...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
