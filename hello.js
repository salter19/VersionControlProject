const HANDLER = require('./msgHandler.js')

class Hello {
  static getHello () {
    return 'Hey mates! Let\'s rock this boat!'
  }

  static getSayNothing () {
    return '*akward silence*'
  }

  static getSayGoodbye () {
    return 'Good Bye!'
  }

  static getUpTheIrons () {
    return 'Up The Irons!'
  }

  static getSayCheese () {
    return 'Hey!'
  }

  static getKalinihta () {
    return 'Kalinihta!'
  }
}

module.exports = Hello
