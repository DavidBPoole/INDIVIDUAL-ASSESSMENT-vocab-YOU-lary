import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const languageArray = ['HTML', 'CSS', 'Javascript'];

const addWordForm = (obj = {}) => {
  clearDom();
  let domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
  <div class="form-group">
    <label for="title">Word</label>
    <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter Word" value="${obj.title || ''}" required>
  </div>
  <div class="form-group">
    <label for="definition">Definition</label>
    <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
  </div>
  <div class="form-group">
    <label for="language">Language/Tech</label>
    <select id="language" class="form-select" aria-label="Default select example" required>
  </div>`;

  languageArray.forEach((lang) => {
    domString += `
       <option 
         value="${lang}" ${lang === obj.language ? 'selected' : ''}>${lang}</option>`;
  });

  domString += `</select><button type="submit" class="btn btn-primary">Submit Word
  </button></form>`;

  renderToDOM('#form-container', domString);
};

export default addWordForm;
