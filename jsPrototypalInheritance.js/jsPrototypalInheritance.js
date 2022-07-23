const arrExample = [1,2,3,4,5,6,7]
const objExample = {
    a: "1",
    b: "2",
    c: "3"
}
const strExample = "I am a string"
const hasArrMethodForEach = obj => obj.__proto__.forEach ? "I have forEach on my proto, I'm an instantiation of the array constructor." : "I don't have forEach on my proto, I'm not an instantiation of the array constructor"
console.log(hasArrMethodForEach(arrExample))
console.log(hasArrMethodForEach(objExample))
console.log(hasArrMethodForEach(strExample))

const secondObjExample = Object.create(objExample)
secondObjExample.ownValue = "I was created after the first obj"

console.log(secondObjExample)
console.log(secondObjExample.__proto__)
secondObjExample.__proto__.a = "200"
console.log(secondObjExample.__proto__)
console.log(objExample.a === "200" ? "Reference types before ES6!" : "This is impossible")

class Something {
    constructor(brand) {
      this.somethingname = brand;
    }
    present() {
      return 'I have a ' + this.somethingname;
    }
  }
  
  class SomethingElse extends Something {
    constructor(brand, els) {
      super(brand);
      this.somethingels = els;
    }
    show() {
      return this.present() + ', it is a ' + this.somethingels;
    }
  }
  
const mySomething = new SomethingElse("Yoke", "Another Yoke");
console.log(mySomething.show())

console.log("Array instantiations have the array proto. If we run: arrExample.__proto__.constructor.name:")
console.log(arrExample.__proto__.constructor.name)
console.log("Array instantiations have the array proto with an object proto. If we run: arrExample.__proto__.__proto__.constructor.name")
console.log(arrExample.__proto__.__proto__.constructor.name)

let varWithoutMethodHelloHello = "this is it";
varWithoutMethodHelloHello.__proto__.helloHello ? console.log("Wow, who knew that strings had a function called helloHello? That's new.") : console.log("We travelled through the entire prototype chain and came up empty")

console.log(Object.prototype)

