import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Schools from '../views/pages/schools';
import Login from '../views/pages/login';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/schools': Schools,
  '/login': Login,
};

export default routes;
