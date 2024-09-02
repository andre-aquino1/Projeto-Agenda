import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import Login from './modules/login';
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.Init();
cadastro.Init();