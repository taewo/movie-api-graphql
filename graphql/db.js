export const people = [
    {
        id: "0",
        name: 'NiCol',
        age: 18,
        gender: 'female',
    }, {
        id: "1",
        name: 'aaaa',
        age: 111,
        gender: '1111',
    }, {
        id: "2",
        name: 'bbbbb',
        age: 222,
        gender: '2222',
    }, {
        id: "3",
        name: 'cccc',
        age: 333,
        gender: '3333',
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => String(id) === person.id);
    return filteredPeople[0];
}