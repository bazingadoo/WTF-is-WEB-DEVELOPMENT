const btn = document.querySelector('#v2');
// console.dir(btn);
//function is executed when onClick happens
//we will wrap the property in function
btn.onclick = () => {
    console.log('btn clicked');
    console.log('hey there');
}

function scream() {
    console.log('AHHHHHHHHHHHHHHHH');
    console.log('STOP TOUCHING ME');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
    alert('you clicked me');
}


//Event - listners recommended
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert('clicked');
});

function twist() {
    console.log('twit');
}

function shout() {
    console.log('twiista');
}

const btn4 = document.querySelector('#ts');
// btn4.onclick = twist;
// btn4.onclick = shout;  //overwrite  not effective

btn4.addEventListener('click', twist);
btn4.addEventListener('click', shout);