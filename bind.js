const exampleObj = {
    objValue: "Yes, that's me!",
    methodEx () {
        return `I am a method on exampleObj, and I can reference my friend with this: ${this.objValue}`
    }, 
    methodOther (ar) {
        return `I am a method on exampleObj, and I can reference my friend with this: ${this.objValue}. My argument is ${ar}`
    } 
}

console.log(exampleObj.methodEx())

const unboundExample = exampleObj.methodEx;

console.log(unboundExample())

const boundExample = exampleObj.methodEx.bind(exampleObj)

console.log(boundExample())

console.log(exampleObj.methodOther.call(exampleObj, "Argumentaciooooomn"))
console.log(exampleObj.methodOther.apply(exampleObj, ["Argue!"]))

console.log('Call a method out of scope!')