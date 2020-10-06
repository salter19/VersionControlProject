class MathUtils {
  static sum (a, b) {
    console.log(a + ' + ' + b)
    return 'Sum is ' + (a + b)
  }

  static divide (a, b) {
    console.log(a + ' / ' + b)
    return 'Divicion is ' + (a / b)
  }
}

module.exports = MathUtils
