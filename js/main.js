import { component } from 'riot';
import App from './App.riot';

document.addEventListener('DOMContentLoaded', () => {
  component(App)(document.getElementById('root'));
});