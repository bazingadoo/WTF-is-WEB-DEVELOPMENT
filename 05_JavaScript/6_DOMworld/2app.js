//by tag

// const allImages = document.getElementsByTagName('img'); //gives an object
// console.log(allImages.length);
// console.log(allImages[0]);

// console.dir(allImages[1]);

// for (let img of allImages) {
//     // console.log(img.src);
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
// }

//by class name
// const squareImages = document.getElementsByClassName('square');           //gives an object, thus 
// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
// }


//queryselector and querySelectAll (runs in console google or set the variable)
document.querySelector('p'); //selects the first para
document.querySelector('#banner'); //by id
document.querySelector('.square'); //selects the first class

const img = document.querySelector('img:nth-of-type(2)'); //selecting by chains
console.log(img);

const anchorTag = document.querySelector('a[title="Java"]');
console.log(anchorTag);

//selecting all anchor tags inside a paragraph like we do in css          
//descendent selector
const links = document.querySelectorAll('p a');
console.log(links);

for (let link of links) {
    console.log(link.href);
}


