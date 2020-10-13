const HANDLER = require('./msgHandler.js')

class Hello {
  static sayHello () {
    return 'Hey mates! Let\'s rock this boat!'
  }

  static sayNothing() {
    return '*akward silence*'
  }
  static sayGoodbye () {
    return 'Good Bye!'
  }

  static upTheIrons () {
    return 'Up The Irons!'
  }

  static sayCheese () {
    return 'Banana'
  }

  static sayGoodnightInGreek () {
    return 'Kalinihta!'
  }

  static yell (method) {
    return HANDLER.yell(method)
  }

  static greet (input) {
    return HANDLER.getGreeting(this, input)
  }

  static feelTheGame () {
	  return HANDLER.yell('Tappara')
  }
}

module.exports = Hello
