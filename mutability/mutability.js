let free = "free"
const arrEx = [1,2,3,4,5]
console.log(free.__proto__)
console.log(arrEx.__proto__)
Array.prototype.writeWoo = () => "wooooo"
console.log(arrEx.writeWoo())
String.prototype.writeWoo = () => "wooooo"
console.log(free.writeWoo())

console.log(`This is the result of free[0]: ${free[0]}`)
free[0] = "T"
console.log(`This is what it looks like after we say free[0] = "T": ${free}. Readable, not writable, primitive not reference`)
free = "Tree"
console.log(`This is what it looks like after saying free = "Tree": ${free}. Re-assignment is possible with immutable things`)

const yikes = arrEx
arrEx.push(9)
// we push 9 onto arrEx, but it also goes on 'yikes'
console.log(yikes)
console.log(yikes === arrEx ? "Arrays are reference types" : "Arrays are not reference types all of a sudden?")

// we see 9 at the end of yikes
const thatsBetter = [...arrEx]
// we use spread operator to make a safe copy
arrEx.push(100000)
// we push onto arrEx
console.log(thatsBetter)
// thatsBetter hasn't changes
console.log(arrEx)
// arrEx has changed
