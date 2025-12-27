import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { screens } from './routes/screens';
import { DemoIndex } from './routes/DemoIndex';
import { ScreenRenderer } from './routes/ScreenRenderer';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/demo" replace />} />
          <Route path="/demo" element={<DemoIndex />} />
          {screens.map((screen) => (
            <Route
              key={screen.path}
              path={screen.path}
              element={<ScreenRenderer screen={screen} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
