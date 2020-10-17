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

  static upTheIrons () {
    return 'Up The Irons!'
  }

  static sayCheese () {
    return 'Hey!'
  }

  static sayGoodnightInGreek () {
    return 'Kalinihta!'
  }
}

module.exports = Hello
