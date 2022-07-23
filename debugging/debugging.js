console.time()

debugger
// the debugger will pause here
// arrow downwards with circle below it will skip to next function call
// triangle pointing right is continue

const exampleObj = {
    objValue: "Yes, that's me!",
    methodEx () {
        return `I am a method on exampleObj, and I can reference my friend with this: ${this.objValue}`
    }, 
    methodOther (ar) {
        return `I am a method on exampleObj, and I can reference my friend with this: ${this.objValue}. My argument is ${ar}`
    } 
} 

debugger

const nums = [1,2,3,4,5]

debugger

console.dir(document.getElementById('hello-hello'))
// gives a dynamic object with all of the possible options
console.log(document.getElementById('hello-hello'))
// just prints the DOM element
console.table(nums)
// prints a table, as well as what it normally would
console.assert(true === false)
// returns Assertion failed: console.assert

console.timeEnd()
