// IMPORTS
import {triangle,rotate} from "./triangle.js";

// SELECTORS
const $form = document.querySelector("#lenght");
const $body = document.querySelector("body");
const $wrapper = document.querySelector(".wrapper");
const $button = document.querySelector(".btn");
const $clear = document.querySelector(".clear");

let side = 0;


// EVENT LISTENERS
$form.addEventListener("submit",renderTriangle);
$button.addEventListener("click",()=>rotateTriangle(side));
$clear.addEventListener("click",clearWindow)



// FUNCTIONS

function renderTriangle(e){
    e.preventDefault();
    if($body.querySelector(".triangle") !== null){
        return;
    }
    if(Number(e.target.children[0].value) <= 1 || Number(e.target.children[0].value) >= 29){
        return;
    }
    side = Number(e.target.children[0].value);
    if(!isNaN(side)){
        const div = triangle(side);
        $wrapper.appendChild(div);
        $button.classList.add("active");
    }
}

function rotateTriangle(num){
    if($body.querySelector(".rotate") !== null){
        return;
    }
    const div = rotate(num);
    $wrapper.appendChild(div);
    $clear.classList.add("active");
}

function clearWindow(){
    $wrapper.innerHTML = "";
    $button.classList.remove("active");
    $clear.classList.remove("active");
    $form.firstElementChild.value = "";
    side = 0;
}
