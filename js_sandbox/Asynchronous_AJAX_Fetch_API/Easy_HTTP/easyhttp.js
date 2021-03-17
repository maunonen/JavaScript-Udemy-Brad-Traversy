function eeasyHTTP(){
  this.http = new XMLHttpRequest();
}

/* Make an HTTP GET REQUEST */
eeasyHTTP.prototype.get = function(url, callback){
  console.log('Easy METHOD'); 
  this.http.open('GET', url, true);
  let self = this
  this.http.onload = function(){
    console.log('AJAX')
    if( self.http.status === 200){
      callback(null, self.http.responseText); 
    } else {
      callback('Error: ' + self.http.status); 
    }
  }
  this.http.send();
} 
/* Make an HTTP POST REQUEST */

eeasyHTTP.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true); 
  this.http.setRequestHeader('Content-type', 'application/json'); 
  let self = this
  this.http.onload = function(){
    callback(null, self.http.responseText); 
  }
  this.http.send(JSON.stringify(data)); 
  }

/* Make an HTTP PUT REQUEST */

eeasyHTTP.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true); 
  this.http.setRequestHeader('Content-type', 'application/json'); 
  let self = this
  this.http.onload = function(){
    callback(null, self.http.responseText); 
  }
  this.http.send(JSON.stringify(data)); 
  }

/* Make an HTTP DELETE REQUEST */
eeasyHTTP.prototype.delete = function(url, callback){
  console.log('Easy METHOD'); 
  this.http.open('DELETE', url, true);
  let self = this
  this.http.onload = function(){
    if( self.http.status === 200){
      callback(null, 'POST deleted'); 
    } else {
      callback('Error: ' + self.http.status); 
    }
  }
  this.http.send();
} 