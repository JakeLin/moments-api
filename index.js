const { ApolloServer, gql } = require('apollo-server');
let { momentsDetails } = require('./dataStore');

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
    photos: [String!]! # non-nullable but can be empty
    createdDate: String!
    isLiked: Boolean! 
    likes: [String!]! # liked user's avator URL
  }

  type MomentsDetails {
    userDetails: UserDetails!
    moments: [Moment]!
  }

  type Query {
    getMomentsDetailsByUserID(userID: ID!): MomentsDetails!
  }

  type Mutation {
    updateMomentLike(momentID: ID!, userID: ID!, isLiked: Boolean!): MomentsDetails!
  }
`;

const resolvers = {
  Query: {
    getMomentsDetailsByUserID: (_, {userID}) => momentsDetails,
  },
  Mutation: {
    updateMomentLike: (_, {momentID, userID, isLiked}) => {
      const userAvatarURL = 'https://avatars0.githubusercontent.com/u/573856?s=460&v=4'
      for (const i in momentsDetails.moments) {
        if (momentsDetails.moments[i].id === momentID) {
          if (momentsDetails.moments[i].isLiked === isLiked) {
            break
          }
          momentsDetails.moments[i].isLiked = isLiked;
          if (isLiked) {
            momentsDetails.moments[i].likes.push(userAvatarURL);
          } else {
            // Just remove the last one, non production code though
            momentsDetails.moments[i].likes.pop();
          }
          break;
        }
      }
      return momentsDetails;
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
