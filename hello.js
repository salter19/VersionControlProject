const HANDLER = require('./msgHandler.js')

class Hello {
  static sayHello () {
    return 'Hey mates! Let\'s rock this boat!'
  }

  static sayNothing () {
    return '*akward silence*'
  }

  static sayGoodbye () {
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

  static feelTheGame () {
    return HANDLER.yell('Tappara')
  }

  static scream (city) {
    return HANDLER.yell('Scream for me ' + city)
  }
}

module.exports = Hello
