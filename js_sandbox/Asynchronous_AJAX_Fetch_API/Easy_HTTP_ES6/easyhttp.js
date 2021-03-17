class EasyHTTP {
  
  // Make an HTTP GET Request
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }
    /* fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  } */
  
  /* make HTTP Post request  */
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method :'POST', 
        headers : {
          'Content-type' : 'application/json' 
        }, 
        body : JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }
  /* Make put request  */
  put(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method :'PUT', 
        headers : {
          'Content-type' : 'application/json' 
        }, 
        body : JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }

  /* Make delete request  */
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method :'DELETE', 
        headers : {
          'Content-type' : 'application/json' 
        }
       })
        .then(res => res.json())
        .then(() => resolve('Resource deleted'))
        .catch(err => reject(err));
    })
  }
}


