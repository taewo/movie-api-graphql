import { people, getById } from './db';

const resolvers = {
    Query: {
        people: () => people,
        // person: () => {
        //     // console.log(age)
        //     // console.log(id)
        //     return people;
        // }
        person: (_, {id}) => getById(id)
    }
}

export default resolvers;
