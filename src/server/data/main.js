const distanceInWordsToNow = require('date-fns/distance_in_words_to_now')
const jobs = require('./resume.json')
const { repos, contributors } = require('./github')
const talks = require('./talks')
const projects = require('./projects')
const countries = require('./countries')

module.exports = {
  name: 'Sara Vieira',
  company: 'YLD',
  email: 'hey@iamsaravieira.com',
  age: distanceInWordsToNow(new Date(1991, 11, 29)),
  twitter: 'https://twitter.com/NikkitaFTW',
  github: 'https://github.com/SaraVieira/',
  instagram: 'https://www.instagram.com/niikkitaftw/',
  medium: 'https://medium.com/@nikkitaftw',
  jobs,
  repos,
  talks,
  projects,
  contributors,
  countries
}
