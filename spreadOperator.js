const [first, second, ...others] = [1,2,3,4,5,6]

console.log(first)
console.log(second)
console.log(others)

const [one, two, three, , ...rest] = [1,2,3,4,5,6]

console.log(one)
console.log(two)
console.log(three)
console.log(rest)

const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};

const {a: ah, b: bei, c, d, e} = alphabet;

console.log(ah)

console.log(bei)

function interesting({fun, cool}) {
    return fun + " " + cool
}

console.log(interesting({fun: "wow", cool: "yeah!"}))
