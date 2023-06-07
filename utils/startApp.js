import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showWords } from '../pages/words';
import { getWords } from '../api/wordData';

// You can pass this function with no parameter and the app will work and display all word cards for ANY user signed in. By adding the parameter "user" it will then put word cards on the dom based on "uid".
const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAVBAR
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getWords(user.uid).then((words) => showWords(words)); // Puts all words on the DOM at App load & Pass userID to display items based on UID.
};

export default startApp;
