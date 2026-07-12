function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderPhoto(recipe) {
  const wrap = el('div', 'recipe-card__photo-wrap');
  if (recipe.photo) {
    const img = document.createElement('img');
    img.className = 'recipe-card__photo';
    img.src = recipe.photo;
    img.alt = recipe.name;
    wrap.appendChild(img);
    return wrap;
  }
  const placeholder = el('div', 'recipe-card__photo--placeholder');
  placeholder.innerHTML = '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';
  placeholder.appendChild(el('div', 'recipe-card__photo-text', 'Placeholder... coming soon!'));
  wrap.appendChild(placeholder);
  return wrap;
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
  body.appendChild(renderPhoto(recipe));

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
    const label = el('span', 'recipe-card__tip-label', 'Scoutmaster tip: ');
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
