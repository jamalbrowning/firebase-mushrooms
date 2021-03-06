import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';
import auth from './components/auth/auth';
import myNavBar from './components/myNavBar/myNavBar';
import authData from './helpers/data/authData';

/**
 * Be able to 'log in to our app
 * Be able to log out of our app
 * see a login button if we are not logged in
 * see a logout button if we are logged in
 * see a list of mushrooms (like a forest!) if we are loggied in
 * on load, if youre logged in
 * show all the mushrooms in the forest
 */
const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavBar.logoutEvent();

  $('body').on('mouseenter', '.myco-card', (e) => {
    e.target.closest('.card').classList.add('bg-dark');
  });
  $('body').on('mouseleave', '.myco-card', (e) => {
    e.target.closest('.card').classList.remove('bg-dark');
  });
};

init();
