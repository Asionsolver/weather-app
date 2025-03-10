import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center my-8">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;