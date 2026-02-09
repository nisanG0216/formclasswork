

    const p = document.querySelector("p");
const toggle = document.getElementById("toggle");

function func() {
    p.style.display="none";
}


function func1() {
    p.style.display="block";
}
function func2(){
    p.textContent = "jsbjdjkasd"
}
function func4() {
    p.textContent = "love";

    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
    
}
let myP = document.querySelector("#myP");

function func5() {
    myP.style.color = "green";
}

function func6() {
    myP.style.color = "red";
}



