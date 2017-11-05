const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Talk",
  fields: {
    name: {
      type: GraphQLString,
      description: "Talk Name"
    },
    event: {
      type: GraphQLString,
      description: "The awesome event that hosted this talk"
    },
    date: {
      type: GraphQLString,
      description: "The Date"
    },
    video: {
      type: GraphQLString,
      description: "Video link if there is one"
    },
    slides: {
      type: GraphQLString,
      description: "Slide link if there is one"
    },
    done: {
      type: GraphQLBoolean,
      description: "Have I already done this talk ?"
    }
  }
});
