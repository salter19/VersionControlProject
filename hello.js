const HANDLER = require('./msgHandler.js')

class Hello {
  static sayHello () {
    return 'Hey mates! Let\'s rock this boat!'
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
    const str = method
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

  static greet (input) {
    return HANDLER.getGreeting(this, input)
  }

    static feelTheGame () {
	return this.yell('Tappara!')
    }
}

module.exports = Hello
