const distanceInWordsToNow = require('date-fns/distance_in_words_to_now')
const jobs = require('./resume.json')
const repos = require('./github')
const talks = require('./talks')
const projects = require('./projects')

module.exports = {
  name: 'Sara Vieira',
  company: 'YLD',
  age: distanceInWordsToNow(new Date(1991, 12, 29)),
  twitter: 'https://twitter.com/NikkitaFTW',
  github: 'https://github.com/SaraVieira/',
  instagram: 'https://www.instagram.com/niikkitaftw/',
  medium: 'https://medium.com/@nikkitaftw',
  jobs,
  repos,
  talks,
  projects
}
