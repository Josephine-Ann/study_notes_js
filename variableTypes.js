{
    let x = "Something scoped";
    const y = "Another thing that is scoped"
    var z = "Not scoped"
    console.log(x)
    console.log(y)
}


console.log(z)
// console.log(x)
// console.log(y)
// If these are not commented out, 
// they throw an error
const cantReassign = "something that stays the same";
// cantReassign = "Attempt at reassignment throws error"
// Comment the above line back in again to throw error
