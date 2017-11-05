const { GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Projects",
  description:
    "Dumb and maybe not so dumb Projects/Packages I have done over the years",
  fields: {
    name: {
      type: GraphQLString,
      description: "Name"
    },
    description: {
      type: GraphQLString,
      description: "Description"
    },
    github: {
      type: GraphQLString,
      description: "The repo of this"
    },
    website: {
      type: GraphQLString,
      description: "The website of this if there is one"
    }
  }
});
