const numbers_ = [43, 56, 33, 22, 44, 36, 5]; 
const numbers2 = new Array (43, 56, 33, 22, 44, 36, 5); 
const fruit = ['fruit', 'Banana', 'Orange']
const mixed = [22, 'Hello', true, undefined, null, new Date()]

val = numbers.length

val = Array.isArray(numbers_)

/* get single value  */

val = numbers_[3]
val = numbers_[0]

/* insert to array */
numbers_[2] = 100

/* find index of method  */

val = numbers_.indexOf(36)

/* Mutating Arrays */
/* add to the end  */
numbers_.push(250)
console.log(numbers_)
/* add to the front  */
numbers_.unshift(120)
console.log(numbers_)
/* take off from end */
numbers_.pop()
console.log(numbers_)
/* take off from front  */
numbers_.shift(120)
console.log(numbers_)
/* splice values */
numbers_.splice(1,1)
console.log(numbers_)
/* reverse arrays  */
numbers_.reverse()

/* concat arrays */
val = numbers_.concat(numbers2)

/* sort  */

val = fruit.sort()
console.log(fruit)
val = numbers_.sort()

/* use compare function */

val = numbers_.sort(function(x, y){
  return x - y
})
console.log(val)
val = numbers_.sort(function(x, y){
  return y - x
})

function under50(num){
  return num < 50
}
val = numbers_.find(under50)

console.log(numbers_)
console.log(val)
