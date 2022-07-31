var foo = 10 + '20';
console.log(foo)
// 1020
console.log(0.1 + 0.2 == 0.3);

// false
// In binary, only prime factor is 2
// So 1/2, 1/4, 1/8 can all be expressed precisely because the denominators use prime factors of 2.
// Whereas 1/5 (0.2) or 1/10 (0.1) are repeating decimals.

console.log(0.5 + 0.25 == 0.75);
// true -> 1/2 + 1/2 === 3/4

function add(a, b) {
    return a && b ? a + b : function (c) { return a + c; };
}

console.log(add(2, 5));
console.log(add(2)(5));

console.log("i'm a lasagna hog".split("").reverse().join(""));

// metasyntactic variables - can change
// foo

// ( window.foo || ( window.foo = "bar" ) );
// In browser this is bar

// var foo = "Hello";
// (function() {
//   var bar = " World";
//   alert(foo + bar);
// })();
// alert(foo + bar);

// In browser...hello world, then error because bar is undefined
var too = [];
too.push(1);
too.push(2);
console.log(too.length)

var foo = {n: 1};
var bar = foo; 
foo.x = foo = {n: 2}; //foo.x = (foo = {n:2}); =>  {n:1}.x = ( {n:1} = {n:2} );  R.H.S. foo={n:2}  
console.log(foo.x); //Result undefined 
console.log(foo); //Result {n:2} 
console.log(bar); //Result {n:1, x: {n:2}}

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');

function doSomething () {
    return 'doSomething'
}
function doSomethingElse () {
    return 'doSomethingElse'
}

var b = "z"
var a = b = "x"

console.log(b)

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
{
      bar: "hello"
  };
}

console.log(foo1())
console.log(foo2())