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
  document.querySelector('#logo').addEventListener('click', (e) => {
    console.warn(e.targetn, 'LOGO/ALL nav link clicked');
    getWords(user.uid).then(showWords);
  });

  // CREATE AN ENTRY BUTTON
  document.querySelector('#createEntry').addEventListener('click', (e) => {
    console.warn(e.target);
    addWordForm({}, user);
  });

  // ALL WORDS
  document.querySelector('#allWords').addEventListener('click', (e) => {
    console.warn(e.target, 'ALL nav link clicked');
    getWords(user.uid).then(showWords);
  });

  // HTML WORDS
  document.querySelector('#navHtml').addEventListener('click', (e) => {
    console.warn(e.target, 'HTML nav link clicked');
    // console.warn('CLICKED SALE BOOKS');
    filterHtmlWords(user.uid).then(showWords);
  });

  // CSS WORDS
  document.querySelector('#navCss').addEventListener('click', (e) => {
    console.warn(e.target, 'CSS nav link clicked');
    // console.warn('CLICKED SALE BOOKS');
    filterCssWords(user.uid).then(showWords);
  });

  // JAVASCRIPT WORDS
  document.querySelector('#navJavascript').addEventListener('click', (e) => {
    console.warn(e.target, 'JS nav link clicked');
    // console.warn('CLICKED SALE BOOKS');
    filterJsWords(user.uid).then(showWords);
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
