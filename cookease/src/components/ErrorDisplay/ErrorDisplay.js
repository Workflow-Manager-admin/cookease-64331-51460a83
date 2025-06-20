import React from "react";

/**
 * PUBLIC_INTERFACE
 * Component for displaying error messages or alerts to users.
 * Can be used across the app for API and validation errors.
 */
function ErrorDisplay({ message }) {
  return (
    <div>
      {/* Display error message */}
      {message}
    </div>
  );
}

export default ErrorDisplay;
