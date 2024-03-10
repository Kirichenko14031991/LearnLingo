import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { PrivateRoute } from './PrivatRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../pages/Home';
import Teachers from '../pages/Teachers';
import Favorites from '../pages/Favorites';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route
            path="/favorites"
            element={<PrivateRoute redirectTo="/" component={<Favorites />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <ToastContainer autoClose={2000} className="toast-container" />
    </div>
  );
};
