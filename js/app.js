document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);
});
//------
const handleFormSubmit = function(event){
  event.preventDefault();

  const resultForm = document.querySelector('#reading-list')
  resultForm.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`

  document.querySelector("#new-item-form").reset();
}

// const newItem = document.createElement("li");
// newListItem.textContent = `${event.target.title.value}`;
// newListItem.classPrimary.add("title");
// const list = document.querySelector('ul');
// list.appendChild(newListItem);
//
// const newItem = document.createElement("li");
// newListItem.textContent = `${event.target.author.value}`;
// newListItem.classPrimary.add("author");
// const list = document.querySelector('ul');
// list.appendChild(newListItem);
//
// const newItem = document.createElement("li");
// newListItem.textContent = `${event.target.category.value}`;
// newListItem.classPrimary.add("category");
// const list = document.querySelector('ul');
// list.appendChild(newListItem);
