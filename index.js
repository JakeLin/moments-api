const { ApolloServer, gql } = require('apollo-server');
const { momentsDetails } = require('./dataStore');

const typeDefs = gql`
  type UserDetails {
    id: ID!
    name: String!
    avatar: String!
    backgroundImage: String!
  }

  enum MomentType {
    URL
    PHOTOS
  }

  type Moment {
    id: ID!
    userDetails: UserDetails!
    type: MomentType!
    title: String # nullable
    url: String # nullable
    photos: [String]! # non-nullable but can be empty
    createdDate: String!
  }

  type MomentsDetails {
    userDetails: UserDetails!
    moments: [Moment]!
  }

  type Query {
    getMomentsDetailsByUserID(userID: ID!): MomentsDetails
  }
`;

const resolvers = {
  Query: {
    getMomentsDetailsByUserID: (userID) => momentsDetails,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
