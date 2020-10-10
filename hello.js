class Hello {
  static sayHello () {
    return 'Hey mates! Let\'s rock this boat!'
  }

  static sayGoodbye () {
    return 'Goodbye!'
  }

  static upTheIrons () {
    return 'Up The Irons!'
  }

  static sayCheese () {
    return 'Cheese!'
  }

  static sayGoodNightInGreek () {
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

  static getGreeting (input) {
    const value = (!isNaN(input) && Number.isInteger(input)) ? input : -1
    let foundIt = false
    let result = -1

    const options = {
      1: this.sayCheese(),
      2: this.sayHello(),
      3: this.sayGoodNightInGreek(),
      4: this.sayGoodbye(),
      666: this.upTheIrons(),
      42: this.yell(this.sayGoodbye())
    }

    for (const opt in options) {
      Number(opt) === value ? foundIt = true
        : foundIt ? foundIt = true : foundIt = false
    }

    foundIt ? result = options[value] : result = 'Could not compute given value.'

    return result
  }

    static feelTheGame () {
	return this.yell('Tappara!')
    }
}

module.exports = Hello
