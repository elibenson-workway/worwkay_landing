import {StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// The page is prerendered to static HTML at build time (see scripts/prerender.tsx),
// so we hydrate the existing markup instead of creating the root from scratch.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
);
