//IMPORTANT----createElement()

const newImg = document.createElement('img');
console.dir(newImg);  //no src 

newImg.src = 'https://images.unsplash.com/photo-1640622659144-18a1fd885123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';

//appending image in the body
document.body.appendChild(newImg);
newImg.classList.add('square');     //adding class square and properties from css

//appending h3
const newH3 = document.createElement('h3');
console.log(newH3);
newH3.innerText = 'Hey there, I got appended';
document.body.appendChild(newH3);

//APPEND AND PREPEND  
const para = document.querySelector('p');
para.append('hey I am cool', '---akshay');

const newB = document.createElement('b');   //creating bold tag
console.log(newB);
newB.append('Heyo Sunny, go buy fruit ');

para.prepend(newB); //adding at the beginning


//INSERTADJACENTELEMENT()(INSERTING TAGS BETWEEN THE TAGS)
const p = document.createElement('p');
p.append('how come we are smart');
console.log(p);

const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterEnd', p);


//removeChild and remove;
const b = document.querySelector('b');
console.log(b);
const po = b.parentElement;
po.removeChild(b);

//inOneGo 
const li = document.querySelector('li');
li.parentElement.removeChild(li);


//remove;
const img = document.querySelector('img');
img.remove();                               //first image removed

//appending 100 buttons  inside the div .container;
for (i = 0; i <= 100; i++) {
    const button = document.createElement('button');
    button.append('Hey');

    const container = document.querySelector('#container');
    container.appendChild(button);
}

