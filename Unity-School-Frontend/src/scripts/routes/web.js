import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Contact from '../views/pages/contact';
import Schools from '../views/pages/schools';
import Login from '../views/pages/login';
import Dashboard from '../views/pages/admin/dashboard';

const routes = {
  '/': Home,
  '/home': Home,
  '/schools': Schools,
  '/schools/:id': Detail,
  '/contact': Contact,
  '/login': Login,
  '/dashboard': Dashboard,
};

export default routes;
