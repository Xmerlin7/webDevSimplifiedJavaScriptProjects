let a = [1, 2, 3];
let b = a;
obj = {name: 'John'};
obj2 = obj;
changeValue(b, obj2);
console.log(a); 


console.log(obj)
function changeValue(b, n) {
    b[0] = 5;
    n.name = 'Jane';
}