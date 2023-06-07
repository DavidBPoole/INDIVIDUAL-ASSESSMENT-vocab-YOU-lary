// REWORK
import { signOut } from '../utils/auth';
import {
  getWords, filterJsWords, filterHtmlWords, filterCssWords
} from '../api/wordData';
import { showWords } from '../pages/words';
import addWordForm from '../components/forms/addWordForm';

// NAVIGTAION EVENTS
const navigationEvents = (user) => {
  // ALL WORDS ON LOGO
  document.querySelector('#logo').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });

  // CREATE AN ENTRY BUTTON
  document.querySelector('#createEntry').addEventListener('click', () => {
    addWordForm({}, user);
  });

  // ALL WORDS
  document.querySelector('#allWords').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });

  // HTML WORDS
  document.querySelector('#navHtml').addEventListener('click', () => {
    // console.warn('CLICKED SALE BOOKS');
    filterHtmlWords(user.uid).then(showWords);
  });

  // CSS WORDS
  document.querySelector('#navCss').addEventListener('click', () => {
    // console.warn('CLICKED SALE BOOKS');
    filterCssWords(user.uid).then(showWords);
  });

  // JAVASCRIPT WORDS
  document.querySelector('#navJavascript').addEventListener('click', () => {
    // console.warn('CLICKED SALE BOOKS');
    filterJsWords(user.uid).then(showWords);
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
