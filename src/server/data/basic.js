const distanceInWordsToNow = require('date-fns/distance_in_words_to_now')

module.exports = {
  name: 'Sara Vieira',
  company: 'YLD',
  email: 'hey@iamsaravieira.com',
  age: distanceInWordsToNow(new Date(1991, 11, 29)),
  twitter: 'https://twitter.com/NikkitaFTW',
  github: 'https://github.com/SaraVieira/',
  instagram: 'https://www.instagram.com/niikkitaftw/',
  medium: 'https://medium.com/@nikkitaftw'
}
