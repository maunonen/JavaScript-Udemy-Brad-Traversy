console.log('--- STRING --- ')

const frstName = 'William';
const lstName = 'johnson';

let fullName ; 
fullName = frstName + lstName;
const str = 'Hello there, my name is Brad'; 
const tags = 'web design, web development, programming'; 


// Concatenation 

fullName = frstName + ' ' + lstName 

fullName =  'Brad'
fullName +=  'Traversy'

fullName = 'Hello my name is ' + frstName + 'and i am ' + age;

fullName = 'That waesome, I can \' ai';
fullName = fullName.length;

fullName = frstName.concat(' ', lstName)

// Change case 
fullName = frstName.toLowerCase();
fullName = frstName.toUpperCase();

console.log(fullName)

//fullName = fullName[0]
//fullName = fullName.indexOf('L')

// chartAt
//fullName = fullName.charAt(2)
//fullName = fullName.charAt(fullName.length - 1)

// substr

//fullName = fullName.substr(0, 4); 

// slice usaully uses with arrays 

fullName = frstName.slice(0, 4);  
console.log(fullName)
fullName = frstName.slice(-3); 
fullName = str.split(' ')
fullName = tags.split(',')

// replace 
fullName = str.replace('Hello', 'Hi') 
console.log(str.includes('there')) 

console.log(fullName)  