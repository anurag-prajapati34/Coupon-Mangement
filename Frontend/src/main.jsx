import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CouponContextProvider } from './contexts/CouponContext.jsx';
import { routes } from './routes/routes.jsx';

import './index.css'; // Moved styles import to the bottom

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CouponContextProvider>
      <RouterProvider router={routes} />
    </CouponContextProvider>
  </StrictMode>
);
