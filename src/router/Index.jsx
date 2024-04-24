import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import NotFoundPage from "../pages/NotFoundPage"; // Import the NotFoundPage
import Loader from '../components/Loader';
import Bahrain from '../pages/Bahrain';
import NormalizeRoutes from '../NormalizeRoutes';

const Index = () => {
  return (
    <NormalizeRoutes>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bahrain" element={<Bahrain />} />
        <Route path="/:slug/" element={<MenuPage />} />
        <Route path="/404" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
      </Routes>
      </NormalizeRoutes>
  );
}

export default Index;
