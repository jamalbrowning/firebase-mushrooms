import mushroomComponent from '../mushroom/mushroom';
import mushroomData from '../../helpers/data/mushroomData';
import utils from '../../helpers/utils';
// import utils from '../../helpers/utils';

/**
 * get all mushrooms
 * loop and creat domstring
 * printtodom
 */

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      console.warn('get mushrroms worked', mushrooms);
      let domString = `
        <h2 class="text-center">Forest</h2>
        <div class="d-flex flex-wrap">
      `;

      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });

      domString += '</div>';

      utils.printToDom('#forest', domString);
    })
    .catch((err) => console.error('get muishrooms broke ', err));
// const domString = '<h1>I see mushrooms!!</h1>'
// utils.printToDom('#forest', domString);
};

export default { buildForest };
