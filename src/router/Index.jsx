import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import NotFoundPage from "../pages/NotFoundPage"; // Import the NotFoundPage
import Loader from '../components/Loader';

const Index = () => {
  return (
    <Router basename="/index.html">
      <Routes>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<MenuPage />}/>
        <Route path="/404" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
      </Routes>
    </Router>
  );
}

export default Index;
