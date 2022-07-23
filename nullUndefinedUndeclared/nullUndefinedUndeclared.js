let variableNotAssignedAnything;

console.log(`${variableNotAssignedAnything} is undefined, right? That's because it's implicit.`)

variableNotAssignedAnything = "something"

console.log(`${variableNotAssignedAnything} = something, right?`)

variableNotAssignedAnything = undefined;

console.log(`Wait, is variableNotAssignedAnything = ${variableNotAssignedAnything}? That's not implicit! You set it! Ooooh. It's TBD, you say?`)

null == undefined ? console.log(`They are being compared with abstract comparison`) : console.log(`They are not being compared with abstract comparison`)

null === undefined ? console.log(`They are being compared with strict comparison`) : console.log(`They are not being compared with strict comparison`)

variableNotAssignedAnything ??= "yo yo"
console.log(variableNotAssignedAnything)
console.log(undefined ?? "yi yi")
