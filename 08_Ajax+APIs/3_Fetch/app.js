// fetch('https://api.coindesk.com/v1/bpi/currentprice.json')

//     .then(res => {
//         console.log("Response, WAITING TO PARSE..", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log("DATA PARSED..");
//         console.log(data.time.updated);
//     })

//     .catch(e => {
//         consol.log("OH NO ERROR ", e);
//     })


//to throw an error
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api2.binance.com/api/v3/ticker/24hr');
        const data = res.json();
        console.log(data[0].lastPrice);
    } catch (e) {
        console.log("SOMETHING WENT WRONG", e);
    }
}
fetchBitcoinPrice()