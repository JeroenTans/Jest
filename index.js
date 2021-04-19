
function add (number1, number2) {
    return number1 + number2;
}

function findByName (names, user) {

    for(let i = 0; i < names.length; i++) {
        const currentUser = names[i];
        if (currentUser.name === user) return currentUser
    }
    return null;
}

module.exports = {
    add,
    findByName,
}