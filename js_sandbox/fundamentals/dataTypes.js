/* JS Data types */

/* string  */

console.log(' -- DATA TYPES  ---');
const name = 'John Doe'; 
const age = 45; 
const hasKids = true; 
const car = null; 
let test = undefined
const sym = Symbol()

console.log( typeof name); 
console.log( typeof age); 
console.log( typeof hasKids); 
console.log( typeof car);  
console.log( typeof test);  
console.log( typeof sym);  

/* REFRERENCE TYPES */

console.log('REFRERENCE TYPES')

const hobbies = ['movies', 'music']
const address = {
  city: 'Boston', 
  state: 'Boston'
}
const today = new Date()

console.log(typeof hobbies)
console.log(typeof address)
console.log(typeof today)

console.log(' -- TYPE CONVERSATION  ---');

let val  ; 

val = String(555) ; 
val = String(4 + 4 ) ; 
val = String(true) ; 
val = String(new Date()) ;  

/* Number to string */

val = (true).toString()
val = (5).toString()
val = Number('5')
val = Number(true) // 1
val = Number(null) // 0
val = Number(false) // 0
val = Number('Hello') // Nan

val = parseInt('100.30')
val = parseFloat('100.39')

console.log(val)
console.log(typeof val)
console.log(val.length )
console.log(val.toFixed(2)) 

