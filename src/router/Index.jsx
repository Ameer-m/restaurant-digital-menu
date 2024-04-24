import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import NotFoundPage from "../pages/NotFoundPage"; // Import the NotFoundPage
// import Loader from '../components/Loader';

const CustomRoute = ({ path, element }) => {
  const navigate = useNavigate();

  if (path !== '/' && path.endsWith('/')) {
    const newPath = path.slice(0, -1); // Remove the trailing slash
    navigate(newPath, { replace: true }); // Replace the current URL without adding to history
    return null; // Return null to prevent rendering anything
  }

  return <Route path={path} element={element} />;
};

const Index = () => {
  return (
    <Router>
      <Routes>
        <CustomRoute path="/" element={<HomePage />} />
        <CustomRoute path="/:slug" element={<MenuPage />} />
        <CustomRoute path="/404" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default Index;
