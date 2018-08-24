document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  renderList();
})

let readingList;
if (JSON.parse(localStorage.getItem('books')) !== null){
  readingList = JSON.parse(localStorage.getItem('books'));
} else {
  readingList = [];
}

const handleFormSubmit = function(event){
  event.preventDefault();

  const newBook = {
    title: event.target.title.value,
    author: event.target.author.value,
    category: event.target.category.value
  };

  readingList.push(newBook); //once clicked, submit books 

  localStorage.setItem('books', JSON.stringify(readingList));
  event.target.reset()
  renderList();
};

const renderList = function(){
    const readingDiv = document.querySelector('#reading-list');
    readingDiv.innerHTML = "";
  const bookList = JSON.parse(localStorage.getItem('books'));
  bookList.forEach((book) => {
    const bookUl = document.createElement('ul');
    const titleLi = document.createElement('li');
    titleLi.textContent = `Title: ${book.title}`;
    const authorLi = document.createElement('li');
    authorLi.textContent = `Author: ${book.author}`;
    const categoryLi = document.createElement('li');
    categoryLi.textContent = `Category: ${book.category}`;

    bookUl.appendChild(titleLi);
    bookUl.appendChild(authorLi);
    bookUl.appendChild(categoryLi);


    readingDiv.appendChild(bookUl);
  })
}
