// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (i = 0; i < 6; i++) {
//     console.log("da dae dae aee")
// }


// looping over arrays

// let array = ['akshay', 'rahul', 'Shubham', 'Canbara'];

// for (let i = 0; i < array.length; i++) {
//     console.log(i, array[i]);
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(i, array[i]);
// }


// NESTED LOOPS

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is ${i}`);
//     for (let j = 1; j <= 4; j++) {
//         console.log(`\tj is ${j}`);
//     }
// }

const seatingChart = [
    ['krishna', 'Rowdy', 'namito'],
    ['Abhram', 'Sonic', 'Salsa', 'jason'],
    ['luther', 'johnson', 'Scala']
]

// for (let i = 0; i <= (seatingChart.length - 1); i++) {
//     // console.log(seatingChart[i]);
//     for (let j = 0; j <= (seatingChart[i].length - 1); j++) {
//         console.log(`\t${seatingChart[i][j]}`);
//     }
// }

// another method

for (i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW      #${i + 1}`);
    for (j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}



