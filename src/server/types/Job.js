const { GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Jobs",
  description: "Jobs I have had or still have",
  fields: {
    company: {
      type: GraphQLString,
      description: "Name of the Company"
    },
    title: {
      type: GraphQLString,
      description: "Title I had there"
    },
    location: {
      type: GraphQLString,
      description: "Where this job was located"
    },
    started: {
      type: GraphQLString,
      description: "Started Date"
    },
    finished: {
      type: GraphQLString,
      description: "End date"
    }
  }
});
