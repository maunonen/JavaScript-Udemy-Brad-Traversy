class EasyHTTP {
  
  // Make an HTTP GET Request
  async get(url){
    const responce = await fetch(url); 
    const resData = await responce.json(); 
    return resData;  
  }
    /* fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  } */
  
  /* make HTTP Post request  */
  async post(url, data){
    
    const responce = await fetch(url, {
        method :'POST', 
        headers : {
          'Content-type' : 'application/json' 
        }, 
        body : JSON.stringify(data)
      })
      const resData = await responce.json(); 
      return resData;  

  }
  /* Make put request  */
  async put(url, data){
    
      const responce = await fetch(url, {
        method :'PUT', 
        headers : {
          'Content-type' : 'application/json' 
        }, 
        body : JSON.stringify(data)
      })
      const resData = await responce.json(); 
      return resData;  
  } 

  /* Make delete request  */
  async delete(url){
    const respocne = await fetch(url, {
        method :'DELETE', 
        headers : {
          'Content-type' : 'application/json' 
        }
       })
       const resData = await 'Resource Deleted'; 
      return resData;  
  }
}


