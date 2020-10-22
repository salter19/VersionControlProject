/**
 * Use for handling messages.
 */
const UTILS = require('./utils.js')
const HELLO = require('./hello.js')

class MsgHandler {

  static getGreeting (input) {

    const value = !isNaN(input) && Number.isInteger(input) ? input : -1
    let foundIt = false
    let result = -1

    const options = {
      0: HELLO.getSayNothing(),
      1: HELLO.getCheer(),
      2: HELLO.getHello(),
      3: HELLO.getKalinihta(),
      4: HELLO.getSayGoodbye(),
      5: HELLO.getGoToSleep(),
      666: HELLO.getUpTheIrons(),
      42: HELLO.get42(),
      1985: this.scream('Long Beach'),
      2020: this.feelTheGame()
    }

    // if given value is found in options, foundIt is set true.
    // if foundIt is already true, it can't be set to false again
    for (const opt in options) {
      Number(opt) === value
        ? (foundIt = true)
        : foundIt
          ? (foundIt = true)
          : (foundIt = false)
    }

    foundIt
      ? (result = options[value])
      : (result = 'Could not compute given value.')

    return result
  }

  static yell (input) {
    const str = input
    /* if the last character is not "." or "!"
       then ! will be added
    */
    let ending = '!'
    if (str.charAt(str.length - 1) === '!') {
      ending = ''
    } else if (str.charAt(str.length - 1) === '.') {
      ending = ''
    }
    return str.toUpperCase() + ending
  }

  static feelTheGame () {
    const result =
      UTILS.getTopBreaker() + ' ' + this.scream('Tampere') + '\n - tappara'
    return this.yell(result)
  }

  static scream (city) {
    return this.yell('Scream for me ' + city)
  }
}

module.exports = MsgHandler
