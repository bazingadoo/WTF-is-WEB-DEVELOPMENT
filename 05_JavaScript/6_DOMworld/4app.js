const h2 = document.querySelector('h2');
// console.log(h2.getAttribute('class'));
// h2.setAttribute('class', 'red');
// h2.setAttribute('class', 'border');  //class red  got removed


//classList
console.log(h2.classList);
h2.classList.add('red', 'border');
h2.classList.remove('border');
console.log(h2.classList.contains('border')); //doesn't contain

//toggle - imp (fade in and fade out) button, collapse
h2.classList.toggle('border');


//traversing class(child - parent)   
const h2 = document.querySelector('h2');
h2.parentElement
h2.children
h2.nextElementSibling
h2.previousElementSibling

//classList practise exercise
//toggling the class of highlight in the li elements using iteration
// const lis = document.querySelectorAll('li');
 
// for(let li of lis){
//     li.classList.toggle('highlight');
// }





