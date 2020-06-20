import mushroomData from '../../helpers/data/mushroomData'
// import utils from '../../helpers/utils';

/**
 * get all mushrooms
 * loop and creat domstring
 * printtodom
 */

 const buildForest = () => {
   mushroomData.getMushrooms()
   .then((response) => console.warn('get mushrroms worked', response.data))
   .catch((err) => console.error('get muishrooms broke '));
  // const domString = '<h1>I see mushrooms!!</h1>'
  // utils.printToDom('#forest', domString);
 };

 export default { buildForest };
