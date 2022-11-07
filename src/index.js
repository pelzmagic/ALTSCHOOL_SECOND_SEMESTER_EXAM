import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
root.render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
