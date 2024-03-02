import React from 'react';

const ErrorContext = React.createContext({
  error: null,
  showError: () => {},
});

export default ErrorContext;