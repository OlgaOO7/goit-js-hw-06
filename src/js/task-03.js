// Завдання 3
// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryImg = document.querySelector('.gallery');

const makeImageMarkup = ({ url, alt }) => {
  return `
  <li>
  <img src="${url}" alt="${alt}" width="280" height="200">
  </li>`
};

const makeImageRow = images.map(makeImageMarkup).join('');
console.log(makeImageRow);


galleryImg.insertAdjacentHTML('afterbegin', makeImageRow);
console.log(galleryImg);
// galleryImg.setAttribute('style', 'display: grid; rid-row-gap: 1em; list-style-type: none;');
// galleryImg.setAttribute('style', 'display: flex; flex-direction: row; gap: 20px; list-style-type: none;');

galleryImg.style.display = 'flex';
galleryImg.style.flexDirection = 'row';
galleryImg.style.gap = '20px';
galleryImg.style.listStyleType = 'none';



