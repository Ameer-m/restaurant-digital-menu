import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";
import NotFoundPage from "../pages/NotFoundPage"; // Import the NotFoundPage
// import Loader from '../components/Loader';

const RemoveTrailingSlash = () => {
  const history = useHistory();
  const location = useLocation();

  if (location.pathname.endsWith('/') && location.pathname !== '/') {
    const newPath = location.pathname.slice(0, -1);
    history.replace(newPath);
    return null;
  }

  return null;
};

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<MenuPage />}/>
        <Route path="/404" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
      </Routes>
    </Router>
  );
}

export default Index;
