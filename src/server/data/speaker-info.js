import basic from './basic'
import talks from './talks'

module.exports = {
  name: basic.name,
  email: basic.email,
  twitter: basic.twitter,
  github: basic.github,
  shirtSize: "Men's M",
  country: 'Portugal',
  bio:
    'Front-End Developer at @YLDio, open sorcerer, Blogger , Drummer and horror movie fan girl 🐈🎃🇵🇹🌈',
  photo: 'https://avatars0.githubusercontent.com/u/1051509?s=460&v=4',
  talks: [
    {
      name: 'We need to talk about Preact',
      description:
        "I know many of you have heard about Preact and may have even played around with it but have you seen it's true potential? In this talk we are going to have the needed discussion about Preact and why it's awesome."
    },
    {
      name: 'The Dream of Styleguide Driven Development',
      description:
        'React is awesome! We probably all here agree on that. You have heard of all types of driven development but react emerged a new type, styleguide driven development became a reality with components. This type of development focuses on Developer/Designer collaboration and on assertive components. With the use of React, CSS Modules, Flow and Snapshot testing we were able to almost remove style regressions. In this talk you get a glimpse of you can start styleguide driven development and how you can sell this dream to your project managers. '
    },
    {
      name: "Let's manage our local state with GraphQL.",
      description:
        "Apollo has given us freedom and happiness when it comes to managing our data coming from the server but we still had to write code and sometimes a lot of it to manage our local state? Well, what if we managed it with queries too? Sounds too awesome right? Let's learn how to do this with apollo-link-state"
    }
  ],
  videos: talks.map(talk => talk.video && talk.video)
}
