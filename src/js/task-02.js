const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
console.log(listEl);



const elements = ingredients.map(ingredient =>{
  const liEl = document.createElement('li');
  liEl.textContent = ingredient,
  liEl.classList.add('item');

  return liEl;
});

listEl.append(...elements);
console.log(listEl);