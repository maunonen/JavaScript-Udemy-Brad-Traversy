const http = new eeasyHTTP; 

/* http.get('https://jsonplaceholder.typicode.com/posts', 
function(err, posts){
  if (err){
    console.log('Errro', err)
  } else {
    console.log(posts);  
  }
});  */

// Get Single Post 

/* http.get('https://jsonplaceholder.typicode.com/posts/1', 
function(err, post){
  if (err){
    console.log('Errro', err)
  } else {
    console.log(post);  
  }
}); 
 */

 /* Create Data */

 const data = {
  title : "custom post", 
  body : "This is a custom post updated"
 }; 

/*  http.post('https://jsonplaceholder.typicode.com/posts', data , function(err, post){
  if (err){
    console.log('Errro', err)
  } else {
    console.log(post);  
  }
 }) */

 /* Update Post  */

 /* http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
  if (err){
    console.log('Errro', err)
  } else {
    console.log(post);  
  }
 }); */

 /* delete post  */
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(err, response){
  if (err){
    console.log('Errro', err)
  } else {
    console.log(response);  
  }
}); 
