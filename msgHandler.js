/**
* Use for handling messages.
*/
class MsgHandler {

  static getGreeting (input) {
    const value = (!isNaN(input) && Number.isInteger(input)) ? input : -1
    let foundIt = false
    let result = -1

    const options = {
      1: this.sayCheese(),
      2: this.sayHello(),
      3: this.sayGoodnightInGreek(),
      4: this.sayGoodbye(),
      666: this.upTheIrons(),
      42: this.sayGoodbye()
    }

    // if given value is found in options, foundIt is set true.
    // if foundIt is already true, it can't be set to false again
    for (let opt in options) {
      Number(opt) === value ? foundIt = true
        : foundIt ? foundIt = true : foundIt = false
    }
  }

}

module.exports = MsgHandler
