window.onload = function() {
    
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let random1 = Math.floor(Math.random() * who.length);
let random2 = Math.floor(Math.random() * action.length);
let random3 = Math.floor(Math.random() * what.length);
let random4 = Math.floor(Math.random() * when.length);

document.querySelector("#excuse").innerHTML = who[random1] +
" " + action[random2] + 
" " + what[random3] +
" " + when[random4];
};