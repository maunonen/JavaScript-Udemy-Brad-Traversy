const http = new EasyHTTP(); 

/* Get Users  */

/* http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err)); 
 */


 const data = {
  name : 'John Doe' , 
  username : 'johndoe' , 
  email : 'john@gmail.com',   
 }
 
 /* http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))  
  .catch(err => console.log(err));  */


 /* update put request  */
 /* http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))  
  .catch(err => console.log(err)); 
  */ 

  /* delete data */
  http.delete('https://jsonplaceholder.typicode.com/users/3')
    .then(data => console.log(data))  
    .catch(err => console.log(err)); 
