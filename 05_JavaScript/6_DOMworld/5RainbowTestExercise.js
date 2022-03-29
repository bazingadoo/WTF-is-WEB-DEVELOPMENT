const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let spans = document.querySelectorAll('span');


// for (let i = 0; i < spans.length; i++) {
//     for (let j = 0; j < colors.length; j++) {
//         spans[i].style.color = colors[i];
//     }
//     console.log(i);
// }

//2nd method
for (let i in colors) {
    spans[i].style.color = colors[i];
    console.log(i)
}
