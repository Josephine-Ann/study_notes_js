// 'use strict';


assignedNotDeclared = "assigned not declared"

const assignedAndDeclared = "assigned and declared"

console.log(assignedNotDeclared)
// throws error in strict mode

delete assignedAndDeclared;
// throws error in strict mode

console.log(assignedAndDeclared)

const exObj = {
    a: "1",
    b: "2",
    c: "3"
}

delete exObj.a
// doesn't throw error in strict mode

console.log(exObj)