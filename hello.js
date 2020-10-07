class Hello {
  static sayHello () {
    return 'Hey mates! Let\'s rock this boat!'
  }
  static sayGoodbye() {
    return 'Goodbye!'
  }
  static yellGoodbye() {
    return 'GOODBYE!'
  }
  static upTheIrons() {
    return 'Up The Irons!'
  }
  static sayCheese() {
    return 'Cheese!'
  }
  static sayGoodNightInGreek() {
    return'Kalinihta!'
  }

  static getGreeting (option) {

      const value = (!isNaN(option) && Number.isInteger(option)) ? option : -1
      console.log(value)
  }
}

module.exports = Hello
