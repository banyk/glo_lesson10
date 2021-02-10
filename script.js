'use strict';

const booksCollection = document.querySelector('.books'),
	books = document.querySelectorAll('.book'),
	adv = document.querySelector('.adv'),
	secondBookElems = books[0].querySelectorAll('li'),
	fifthBookElems = books[5].querySelectorAll('li'),
	sixthBookElems = books[2].querySelectorAll('li'),
	chapter8 = document.createElement('li');

booksCollection.prepend(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);

document.body.style.backgroundImage = `url('image/you-dont-know-js.jpg')`;

books[4].querySelector('h2 a').textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

secondBookElems[10].before(secondBookElems[2]);
secondBookElems[3].after(secondBookElems[6]);
secondBookElems[6].after(secondBookElems[8]);

fifthBookElems[4].after(fifthBookElems[2]);
fifthBookElems[1].after(fifthBookElems[9]);
fifthBookElems[7].after(fifthBookElems[5]);

chapter8.textContent = `Глава 8: За пределами ES6`;
sixthBookElems[8].after(chapter8);