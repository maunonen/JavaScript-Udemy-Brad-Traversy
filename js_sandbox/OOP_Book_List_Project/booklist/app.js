/* Book Constructor  */

function Book ( title, author, isbn ) {
  this.title = title; 
  this.author = author; 
  this.isbn = isbn; 
}

/* UI constructor  */

function UI () {

}

/* add Book To List */
UI.prototype.addBookList = function(book) {
  const list = document.getElementById('book-list');  
  /* Create tr element  */
  const row = document.createElement('tr'); 
  /* insert cols  */
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="" class="delete">x</a></td>
  `;
  list.appendChild(row);   
  console.log(row)
}

/* Clear Fields  */
UI.prototype.clearFields = function(){
  document.getElementById('title').value = ''; 
  document.getElementById('author').value = ''; 
  document.getElementById('isbn').value = ''; 
}

/* Show alert  */
UI.prototype.showAlert = function(message, className) {
  /* create div  */
  const div = document.createElement('div'); 
  /* add classes  */
  div.className = `alert ${className}`; 
  /* Add text */
  div.appendChild(document.createTextNode(message)); 
  /* Get parent  */
  const container = document.querySelector('.container'); 
  /* get form */
  const form = document.querySelector('#book-form'); 
  /* Insert alert  */
  container.insertBefore(div, form);  
  // Timeout after 3 seconds 
  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 3000); 
}

/* Delete book */

UI.prototype.deleteBook = function(target){
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

/* Event listner  */
document.getElementById('book-form').addEventListener('submit', 
function(e) {
  /* get form values  */
  const title = document.getElementById('title').value,  
        author = document.getElementById('author').value,  
        isbn = document.getElementById('isbn').value; 
  // Instantiate book 
  const book = new Book(title, author, isbn );     
  console.log(book); 
  const ui = new UI(); 

  if (title === '' || isbn === '' || author === '' ) {
    // Error alert 
    ui.showAlert('PLease fill in all fields', 'error'); 
  } else {
    /* add book to list  */
    ui.addBookList(book); 
    /* show success */
    ui.showAlert('Book added', 'success'); 
    /* Clear fileds  */
    ui.clearFields(); 
  }

    e.preventDefault(); 
}); 

// Event Listener for delete 

document.getElementById('book-list').addEventListener('click', 
  function (e) {
    const ui = new UI();
    // Delete book
    ui.deleteBook(e.target); 
    /* show alert  */
    ui.showAlert('Book removed', 'success'); 
    e.preventDefault(); 
  }
); 
