import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from "routers";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Router />
);

reportWebVitals();
