const { add } = require('../index');
const { findByName } = require('../index');

test('Controleer of de test werkt', ()=>{
    console.log("Yes!!")
})

test('The add function adds two numbers and returns the sum', ()=>{
    const number1 = 5;
    const number2 = 10;
    const sum = add(number1, number2);
    expect(sum).toBe(15);
});

test("findByName will return an object from an array with the specified name", ()=> {
    const usernames = [
        {name: "Piet", id: 1},
        {name: "Klaas", id: 2},
        {name: "Henk", id: 3},
    ];

    const userNameToFind = "Klaas";

    const result = findByName(usernames, userNameToFind)

    expect(result).toEqual({name: "Klaas", id: 2})
});

test("findByName returns null if a user is not found", ()=>{
    const usernames = [
        {name: "Piet", id: 1},
        {name: "Klaas", id: 2},
        {name: "Henk", id: 3},
    ];

    const userNameToFind = "Jan";

    const result = findByName(usernames, userNameToFind);

    expect(result).toBeNull();
})

