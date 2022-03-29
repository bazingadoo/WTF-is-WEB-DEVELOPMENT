// innerClass, textContent, innerText  

// const para = document.querySelector('P').innerText
// document.querySelector('P').innerText = 'lol'
// const paras = document.querySelector('P').textContent; //displays everything



// const allLinks = document.querySelectorAll('a');
// for (link of allLinks) {
//     link.innerText = 'Hey I am a link!!!';
// }

//innerHtml(for html tags and stuffs updating)
// const html = document.querySelector('p').innerHTML
// console.log(html);


// document.querySelector('h1').innerHTML = '<i>ttrr</i>';
// document.querySelector('h1').innerHTML += '<sup>5667</sup>';
// console.log(document.querySelector('h1').innerHTML);



//ATTRIBUTES(ids,tags etc)  - using simple, getAtttribute and setAttribute
// document.querySelector('#banner').id           //banner
// document.querySelector('img').id               //banner
// document.querySelector('#banner').id = 'whoops'   //manipulated ID
// document.querySelector('#banner').src 
// document.querySelector('a').href         
// document.querySelector('a').title

// const firstLink = document.querySelector('a');
// console.log(firstLink.href);
// console.log('****');
// console.log(firstLink.getAttribute('href'));
// console.log(firstLink.getAttribute('title'));
// console.log(firstLink.getAttribute('class'));

// //set attribute 
// console.log(firstLink.setAttribute('href', 'http://example.com'))

// const input = document.querySelectorAll('input');
// console.log(input);
// console.log(input[1]);


// const inp = document.querySelector('input[type="text"]');
// inp.type = 'password';
// inp.type = 'color';
// inp.setAttribute('type', 'text');

// console.log(inp);


//CHANGING STYLES
// const h1 = document.querySelector('h1');    //works inline with html, not recommended
// console.log(h1.style);
// console.log(h1.style.color = 'green');
// h1.style.fontSize = '3em';
// h1.style.border = '2px solid pink';

// const allLinks = document.querySelectorAll('a');
// for (let link of allLinks) {
//     link.style.color = 'pink';
//     link.style.textDecorationColor = 'magenta';
// }

const h1 = document.querySelector('h1');
h1.style.fontSize;              //" "

//to get property(css) (use in console)
window.getComputedStyle(h1);
window.getComputedStyle(h1).fontSize;         //32px
window.getComputedStyle(h1).fontFamily;

