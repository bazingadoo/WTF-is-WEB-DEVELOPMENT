// try {
//     hsjshjs.toUpperCase();
// }
// catch {
//     console.log('Error');
// }

const yell = function (msg) {
    try {
        console.log(msg.toLowerCase().repeat(3));
    } catch (e) {
        // console.log(e);
        console.log('Please passs a srtring next time!')
    }
}

yell(5676);