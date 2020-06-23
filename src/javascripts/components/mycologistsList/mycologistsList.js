import mycologistData from '../../helpers/data/mycologistsData';
import mycologistComponent from '../mycologist/mycologist';
import utils from '../../helpers/utils';
import singleMyCologist from '../singmyco/singleMyCologist';

const buildScentists = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = `
      <div class="scientists">
      <h2 class="text-center">Mycologist Hut</h2>
      <div class="d-flex flex-wrap">
  `;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.scientistMaker(mycologist);
      });
      domString += '</div>';

      utils.printToDom('#scientists', domString);

      $('body').on('click', '.myco-card', singleMyCologist.buildMycologist);
    })
    .catch((err) => console.error('get mycologists broke', err));
};

export default { buildScentists };
