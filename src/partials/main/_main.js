const button3 = document.querySelector(".faq__div__ul__li3__btn")
const button4 = document.querySelector(".faq__div__ul__li4__btn")
const button5 = document.querySelector(".faq__div__ul__li5__btn")
const button6 = document.querySelector(".faq__div__ul__li6__btn")
const button2 = document.querySelector(".faq__div__ul__li2__btn")
const li3   = document.querySelector(".faq__div__ul__li3")
const li4   = document.querySelector(".faq__div__ul__li4")
const li5   = document.querySelector(".faq__div__ul__li5")
const li6   = document.querySelector(".faq__div__ul__li6")
const li2   = document.querySelector(".faq__div__ul__li2")
const p2 = document.querySelector(".faq__div__ul__li2__p2")
function clickOnBtn3(){
    li3.style.height = "248px";
    li4.style.height = "43px"
    li5.style.height = "43px"
    li6.style.height = "43px"
    li2.style.height = "43px"
}
button3.addEventListener("click", clickOnBtn3)

function clickOnBtn4(){
    li4.style.height = "248px";
    li3.style.height = "43px"
    li5.style.height = "43px"
    li6.style.height = "43px"
    li2.style.height = "43px"
}
button4.addEventListener("click", clickOnBtn4)

function clickOnBtn5(){
    li5.style.height = "248px";
    li3.style.height = "43px"
    li4.style.height = "43px"
    li6.style.height = "43px"
    li2.style.height = "43px"
}
button5.addEventListener("click", clickOnBtn5)

function clickOnBtn6(){
    li6.style.height = "248px";
    li3.style.height = "43px"
    li5.style.height = "43px"
    li4.style.height = "43px"
    li2.style.height = "43px"
}
button6.addEventListener("click", clickOnBtn6)

function clickOnBtn2(){
    li2.style.height = "248px"
    p2.style.height = "43px"
    li3.style.height = "43px"
    li5.style.height = "43px"
    li6.style.height = "43px"
    li4.style.height = "43px"
}
button2.addEventListener("click", clickOnBtn2)

