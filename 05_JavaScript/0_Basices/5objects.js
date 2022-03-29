const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',

    get fullAddress() {
        const { address, city, state, zipcode } = this;
        return `${address} ${city} ${state} ${zipcode}`
    }
}
// restaurant.name or restaurant['name'] will give Ichiran Ramen
//calling the values with a key in the object
console.log(restaurant.fullAddress);
