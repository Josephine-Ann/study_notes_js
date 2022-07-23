const toCompare = [1,2,3,4,5,6,7]
const parentList = document.getElementById('parent-list')
const children = document.getElementById('special-child')
const clickEventsReturnHTMLCollection = () => console.log(document.getElementsByClassName("list-show-html-collection-lis").__proto__.constructor.name)
const nameofArrayProto = () => console.log(toCompare.__proto__.constructor.name)
const doHTMLCollectionsHaveForEach = () => console.log(document.getElementsByClassName("list-show-html-collection-lis").__proto__.forEach ? "I have a forEach you can use" : "I don't have a forEach you can use")
const doArraysHaveForEach = () => console.log(toCompare.__proto__.forEach ? "I have a forEach you can use" : "I don't have a forEach you can use")
const makeArrayFromHTMLCollection = () => console.log(Array.from(document.getElementsByClassName("list-show-html-collection-lis")).__proto__.constructor.name)

parentList.addEventListener("click", (event) => {
  console.log(`The li that says "${event.target.innerHTML}" was listened for by ${event.currentTarget}, which is an example of bubbling`)
})

children.addEventListener("click", (event) => {
  console.log(`The li that says "${event.target.innerHTML}" was listened for by ${event.currentTarget}, which is an example of capturing`)
}, true)

clickEventsReturnHTMLCollection()
nameofArrayProto()
doArraysHaveForEach()
doHTMLCollectionsHaveForEach()
makeArrayFromHTMLCollection()
