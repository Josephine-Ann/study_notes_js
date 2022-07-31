const parentList = document.getElementById('parent-list')

parentList.addEventListener("click", (event) => {
    alert(`The li was listened for by ${event.currentTarget}, which is an example of bubbling`)
})

const firstButton = document.getElementsByClassName('nth-of-type-b')[0]
const secondButton = document.getElementsByClassName('nth-child-b')[0]
const firstButtonClassList = document.getElementsByClassName('nth-of-type-b')[0].classList
const secondButtonClassList = document.getElementsByClassName('nth-child-b')[0].classList

function reportClassLists(first, second) {
    return function () {
      if (first.contains("active-button")) {
        firstButton.classList.add("inactive-button")
        firstButton.classList.remove("active-button")
        secondButton.classList.remove("inactive-button")
        secondButton.classList.add("active-button")
      } else if (second.contains("active-button")) {
        secondButton.classList.remove("active-button")
        secondButton.classList.add("inactive-button")
        firstButton.classList.remove("inactive-button")
        firstButton.classList.add("active-button")
      } 
        const listFirst = document.getElementsByClassName("first-ul");
        for (var i = 0; i < listFirst.length; i++) {
            if (listFirst[i].classList.contains("hidden")) {
                listFirst[i].classList.remove("hidden")
            } else {
                listFirst[i].classList.add("hidden")
            }
        }
        const listSecond = document.getElementsByClassName("second-ul");
        for (var i = 0; i < listSecond.length; i++) {
            if (listSecond[i].classList.contains("hidden")) {
                listSecond[i].classList.remove("hidden")
            } else {
                listSecond[i].classList.add("hidden")
            }
        }
        const listThird = document.getElementsByClassName("third-ul");
        for (var i = 0; i < listThird.length; i++) {
            if (listThird[i].classList.contains("hidden")) {
                listThird[i].classList.remove("hidden")
            } else {
                listThird[i].classList.add("hidden")
            }
        }
        const listFourth = document.getElementsByClassName("fourth-ul");
        for (var i = 0; i < listFourth.length; i++) {
            if (listFourth[i].classList.contains("hidden")) {
                listFourth[i].classList.remove("hidden")
            } else {
                listFourth[i].classList.add("hidden")
            }
        }
        const titles = document.getElementsByClassName("title-lists");
        for (var i = 0; i < titles.length; i++) {
            if (titles[i].classList.contains("hidden")) {
                titles[i].classList.remove("hidden")
            } else {
                titles[i].classList.add("hidden")
            }
        }
    };
}

firstButton.onclick = reportClassLists(firstButtonClassList, secondButtonClassList);;

secondButton.onclick = reportClassLists(firstButtonClassList, secondButtonClassList);
