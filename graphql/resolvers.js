import { getMovies, test_func } from './db';

const resolvers = {
    Query: {
        movies1: (_, { rating, limit }) => getMovies(limit, rating),
        test: (_, {}) => test_func()
    }
}

export default resolvers;

