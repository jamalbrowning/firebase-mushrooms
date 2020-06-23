import mycologistData from '../../helpers/data/mycologistsData';
import mycologistComponent from '../mycologist/mycologist';
import utils from '../../helpers/utils';

const buildScentists = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      console.warn('get mycologists worked', mycologists);
      let domString = `
      <h2 class="text-center">Scientists</h2>
      <div class="d-flex flex-wrap">
      `;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.scientistMaker(mycologist);
      });
      domString += '</div>';

      utils.printToDom('#scientists', domString);
    })
    .catch((err) => console.error('get mycologists broke', err));
};

export default { buildScentists };
