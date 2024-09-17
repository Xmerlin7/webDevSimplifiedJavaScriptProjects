const items = [
    {price: 10},
    {price: 20},
    {price: 30},
    {price: 40},
    {price: 50}
];
const total = items.reduce((sum, item) => {
    return sum + item.price
}, 0);
console.log(total);