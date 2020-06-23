const mushroomMaker = (mushroom) => {
  // mushroom.name
  // .location
  // .size
  // . weight

  const domString = `
      <div class="col-3">
        <div class="card">
            <div class="card-body">
            <div class="card-header">${mushroom.name}</div>
              <h5 class="card-title">${mushroom.location}</h5>
              <p class="card-text">this is the weight foo ${mushroom.size} and ${mushroom.weight}.</p>
            </div>
        </div>
      </div>
  `;

  return domString;
};
export default { mushroomMaker };
