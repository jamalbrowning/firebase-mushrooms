import firebase from 'firebase/app';
import 'firebase/auth';
import mushroomList from '../../components/mushroomList/mushroomList';
import mycologistsList from '../../components/mycologistsList/mycologistsList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const scienceDiv = $('#scientists');
const logoutButton = $('#navbar-logout-button');
const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      scienceDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      mushroomList.buildForest();
      mycologistsList.buildScentists();
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      scienceDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
