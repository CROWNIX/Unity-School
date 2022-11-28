import 'regenerator-runtime';
import '../styles/bootstrap.min.css';
import '../styles/style.css';
import './components/footer';
// import './components/form-reviews';
import './components/content';
import './components/hero';
import './components/navbar';
import App from './views/app';
import '../public/js/bootstrap.bundle.min';
// import swRegister from './utils/sw-register';

const app = new App(document.querySelector('body'));

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
