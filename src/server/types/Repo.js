const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Repos",
  description: "All my github repos",
  fields: {
    name: {
      type: GraphQLString,
      description: "Repo Name"
    },
    url: {
      type: GraphQLString,
      description: "Link to repo"
    },
    description: {
      type: GraphQLString,
      description: "Repo description"
    },
    language: {
      type: GraphQLString,
      description: "Language used"
    },
    stars: {
      type: GraphQLInt,
      description: "Number of stars"
    },
    fork: {
      type: GraphQLBoolean,
      description: "Is it forked ?"
    },
    owner: {
      type: GraphQLString,
      description: "Owner of the repo"
    }
  }
});
