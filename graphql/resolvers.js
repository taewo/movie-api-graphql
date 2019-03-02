const nicolas = {
    name: 'NiCol',
    age: 18,
    gender: 'female',
}

const resolvers = {
    Query: {
        person: () => nicolas
    }
}

export default resolvers;

// const nicolas = {
//     name: 'taewoong',
//     age: 20,
//     gender: '123',
// }

// const resolvers = {
//     Query: {
//         person: () => nicolas
//     }
// }