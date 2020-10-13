const HELLO = require('./hello.js')
/**
* Use for handling messages.
*/
class MsgHandler {

  static getGreeting (input) {
    const value = (!isNaN(input) && Number.isInteger(input)) ? input : -1
    let foundIt = false
    let result = -1

    const options = {
      1: HELLO.sayCheese(),
      2: HELLO.sayHello(),
      3: HELLO.sayGoodnightInGreek(),
      4: HELLO.sayGoodbye(),
      666: HELLO.upTheIrons(),
      42: HELLO.sayGoodbye()
    }

    // if given value is found in options, foundIt is set true.
    // if foundIt is already true, it can't be set to false again
    for (let opt in options) {
      Number(opt) === value ? foundIt = true
        : foundIt ? foundIt = true : foundIt = false
    }

    foundIt ? result = options[value] : result = 'Could not compute given value.'

    return result
  }

}

module.exports = MsgHandler
