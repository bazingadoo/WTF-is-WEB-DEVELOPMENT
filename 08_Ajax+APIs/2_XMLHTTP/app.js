// NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!
const req = new XMLHttpRequest();

req.onload = function () {
    console.log("ALL DONE WITH REQUEST!!!")
    console.log(this);
    const data = JSON.parse(this.responseText);
    console.log(data[0].priceChange);
}

req.onerror = function () {
    console.log("ERROR!!!")
    console.log(this);
}

req.open('GET', 'https://api2.binance.com/api/v3/ticker/24hr')
req.send();