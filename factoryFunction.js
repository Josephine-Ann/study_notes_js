// factory function below:

function createBuilding(size, type) {
    return {
        size,
        type,
        details() {
            return `I am a ${this.type} and I am ${this.size}`
        } 
    }
}

const council = createBuilding("big", "council")
const library = createBuilding("big", "library")
console.log(library.details())

library.details = function() {
    return `I am a ${this.type} and I am ${this.size} and that is still cool!`
}

console.log(library.details()) // changed
console.log(council.details()) // not changed
console.log(library.__proto__.constructor.name) // object

// Everything above demonstrates that 
// Factory Functions do not have prototypal
// inheritance by default
// workaround:
const myCoolProto = {
    talk(){
        return `Hello, I am ${this.name}`
    }
}

function createPerson(name) {
    return Object.create(myCoolProto, {
        name: {
            value: name
        }
    })
}

const me = createPerson("Jo")
const you = createPerson("Sheena")

console.log(me.talk())
console.log(you.talk())


me.__proto__.talk = function() {
    return `Some other shit with  ${this.name}`
}

console.log(me.talk())
console.log(you.talk())

// Constructors do have prototypal
// inheritance by default:

function Something (thing) {
    this.thing = thing
}

const yoke = new Something("What's this?")
const vaina = new Something("¿Qué es eso?")

console.log(yoke.thing)
console.log(vaina.thing)

Something.prototype.talk = function () {
    return "Yo hi hi hi"
}

console.log(yoke.talk())
console.log(vaina.talk())

Something.prototype.talk = function () {
    return "Heeeeey"
}

console.log(yoke.talk())
console.log(vaina.talk())

// Factory functions protect Data Privacy:

function createIcecream(flavourOne, flavourTwo) {
    return {
        description() {
            return `You have made a delicious icecream with ${flavourOne}.`
        }
    }
}

const cherryVanilla = createIcecream("Cherry", "Vanilla")
console.log(cherryVanilla.description())
// can be seen
console.log(cherryVanilla.flavourTwo)
// can't be seen

function createPainting(size, paintType, elements) {
    return {
        size,
        paintType,
        elements,
        details() {
            return `I am painted with ${this.paintType} and I am ${this.size}`
        },
        info() {
            this.elements.forEach(function (element) {
                console.log(`The ${element} was painted with ${this.paintType}`)
            });
        },
        otherInfo() {
            this.elements.forEach(element => {
                console.log(`The ${element} was painted with ${this.paintType}`)
            });
        } 
    }
}

const dali = createPainting("big", "oils", ["tree", "window", "car", "phone"])

// the difference when you use an arrow function (relative to 'this')
console.log(dali.info())
console.log(dali.otherInfo())