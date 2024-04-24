import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const NormalizeRoutes = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route
          path="/*"
          element={<Navigate to={window.location.pathname.replace(/\/$/, "") + window.location.search} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default NormalizeRoutes;
