const curseWords = require('curse-words-common')
const uniqueRandomArray = require('unique-random-array')
const jobs = require('./resume.json')
const { repos, contributors } = require('./github')
const talks = require('./talks')
const projects = require('./projects')
const countries = require('./countries')
const speakerInfo = require('./speaker-info')
const basic = require('./basic')

const rand = uniqueRandomArray(curseWords)

module.exports = {
  ...basic,
  randomCurseWord: rand(),
  jobs,
  repos,
  talks,
  projects,
  contributors,
  countries,
  speakerInfo
}
