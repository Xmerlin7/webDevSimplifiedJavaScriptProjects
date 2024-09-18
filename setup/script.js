const grandParent = document.querySelector('#grandparent');
// const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
grandParent.style.color = 'red';
const parent1 = grandParent.children[0]
const parent2 = grandParent.children[1]

parent1.style.color = 'blue';
parent2.children[0].style.color = 'blue';

