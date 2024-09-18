let person = {
    name: 'John',
    friend: {
        name: 'Chris',
        friend: {
            name: 'Matt'
        }
    }
}
let per = person
function printFriends(pers) {
    if (pers == null) {
        return
    }
    console.log(pers.name)
    pers = pers.friend
    printFriends(pers)
}
printFriends(per)