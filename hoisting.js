
console.log(nonAnonFunc())
// console.log(anonFunc())
console.log(cool)
// console.log(coolConst)
// // throws error
// console.log(coolLet)
// // throws error

function nonAnonFunc() {
    return 'This comes from non anon func and will not throw an error'
}

// const anonFunc = () => 'This comes from anon func and will throw an error'
// // hoisting impossible with IIFE -> Immediately Invoked Function Expressions

var cool = "cool"
// returns undefined
const coolConst = "cool"
// throws error
const coolLet = "cool"
// throws error

