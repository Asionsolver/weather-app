import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
        <div className="text-red-500 text-center mb-6 p-3 bg-red-50 rounded-lg flex items-center justify-center">
            <AlertCircle size={18} className="mr-2" />
            <span>{message}</span>
        </div>
    );
};

export default ErrorMessage;