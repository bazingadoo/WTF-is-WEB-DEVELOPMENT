//SetTimeout

// console.log("hehehe");
// setTimeout(() => {                       //setTimeout(func, interval)
//     console.log("...u there")
// }, 3000);
// console.log('it got printed first');


//setInterval
// setInterval(() => {
//     console.log(Math.random());
// }, 2000);

//to stop set interval 
const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

// clearInterval(id);   //it stops the interval