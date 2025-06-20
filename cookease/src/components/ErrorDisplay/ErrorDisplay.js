import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ErrorDisplay
 * Used throughout the app to display meaningful error messages to the user.
 */
const ErrorDisplay = ({ message }) => {
  return (
    <div className="error-display">
      {/* Display formatted error messages */}
      {message || "An error occurred."}
    </div>
  );
};

export default ErrorDisplay;
