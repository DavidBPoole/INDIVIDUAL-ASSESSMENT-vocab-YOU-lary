import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <h1>Welcome to Vocab-YOU-lary!</h1>
  <h6>Where you can create, update, delete and store your vocabulary words in a persistent online database unique to YOU!</h6>
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="word-bank"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
