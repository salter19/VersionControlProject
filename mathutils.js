class MathUtils {
  static sum (a, b) {
    console.log(a + ' + ' + b)
    return 'Sum is ' + (a + b)
  }

  static divide (a, b) {
    console.log(a + ' / ' + b)
    return 'Division is ' + (a / b)
  }
}

module.exports = MathUtils
