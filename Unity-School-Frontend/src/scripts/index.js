import '../scss/style.scss';
import 'bootstrap';
import 'regenerator-runtime';
import App from './views/app';
import './components/navbar';

const app = new App(document.querySelector('main'));

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
