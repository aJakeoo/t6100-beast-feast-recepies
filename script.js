function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderRecipe(recipe) {
  const card = el('article', 'recipe-card');

  const head = el('div', 'recipe-card__head');
  head.appendChild(el('div', 'recipe-card__name', recipe.name));
  if (recipe.meta) {
    head.appendChild(el('div', 'recipe-card__meta', recipe.meta));
  }
  card.appendChild(head);

  const body = el('div', 'recipe-card__body');

  const ingredientsCol = el('div', 'recipe-card__ingredients');
  ingredientsCol.appendChild(el('div', 'recipe-card__label', 'Ingredients'));
  const ul = document.createElement('ul');
  (recipe.ingredients || []).forEach((ing) => ul.appendChild(el('li', null, ing)));
  ingredientsCol.appendChild(ul);
  body.appendChild(ingredientsCol);

  const stepsCol = el('div', 'recipe-card__steps');
  stepsCol.appendChild(el('div', 'recipe-card__label', 'Steps'));
  const ol = document.createElement('ol');
  (recipe.steps || []).forEach((step) => ol.appendChild(el('li', null, step)));
  stepsCol.appendChild(ol);

  if (recipe.tip) {
    const tip = el('div', 'recipe-card__tip');
    const label = el('span', 'recipe-card__tip-label', 'Scoutmaster tip — ');
    tip.appendChild(label);
    tip.appendChild(document.createTextNode(recipe.tip));
    stepsCol.appendChild(tip);
  }

  body.appendChild(stepsCol);
  card.appendChild(body);

  return card;
}

const list = document.getElementById('recipe-list');
RECIPES.forEach((recipe) => list.appendChild(renderRecipe(recipe)));
