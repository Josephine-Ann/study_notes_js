const whatsThis = () => Object.keys(this).length === 0 ? console.log("You're in node, referencing global") : console.log("You're in the browser, referencing window")
whatsThis()
document.getElementById('this-explanation').append(`You're in the browser, referencing the window ${this}`)
const exampleObj = {
    objValue: "Yes, that's me!",
    methodEx () {
        return `I am a method on exampleObj, and I can reference my friend with this: ${this.objValue}`
    } 
}
document.getElementById('this-obj').append(exampleObj.methodEx())

class Something {
    constructor(exp) {  // Constructor
      this.explanation = exp;
    }
  }
  someShit = new Something("I'm a class constructor, beginning with an Uppercase Letter, Something");
  document.getElementById('this-constructors').append(someShit.explanation)

  