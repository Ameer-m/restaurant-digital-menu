import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import NotFoundPage from "../pages/NotFoundPage"; // Import the NotFoundPage
import Loader from '../components/Loader';

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug/" element={<MenuPage />} strict/>
        <Route path="/404" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
      </Routes>
    </Router>
  );
}

export default Index;
