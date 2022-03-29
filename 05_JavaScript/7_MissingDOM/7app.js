const input = document.querySelector('input');
const h1 = document.querySelector('h1');


//Change event
// input.addEventListener('change', function (e) {  //spontaneous
// console.log("uywdtuytdqdyd");

// });


//Input Event                             //non-spotaneous                   
input.addEventListener('input', function (e) {
    h1.innerText = input.value;                       //h1.innerText is same as h1.textContent
    // console.log('Input Event');
    // console.log(e);
});
