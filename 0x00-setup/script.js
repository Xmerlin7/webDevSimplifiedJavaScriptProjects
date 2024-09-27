const arr = ['A', 'B', 'C', 'D']
const obj = {
    name: "Mohy",
    age: 22,
    address : {
        street: "kafr elshigk",
        id: 9
    }
}
const {name : sa7by, age, address: {street}} = obj
console.log(sa7by)
console.log(street)