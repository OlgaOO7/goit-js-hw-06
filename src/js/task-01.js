const categoriesEL = document.querySelectorAll('.item');
console.log('Numbers of categories:', categoriesEL.length);

const newArray = [...categoriesEL].map(element => `Category: ${element.children[0].textContent} 
Elements: ${element.children[1].children.length}`).join("\n")
console.log(newArray);
