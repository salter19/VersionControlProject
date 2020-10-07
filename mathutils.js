class MathUtils {
  static sum (a, b) {
    console.log(a + ' + ' + b)
    return 'Sum is ' + (a + b)
  }

  static sumMore (a, b, c) {
    console.log(a + ' + ' + b + ' + ' + c)
  }

  static subtract (a, b) {
    console.log(a + ' - ' + b)
    return 'Result is ' + (a - b)
  }

  static divide (a, b) {
    console.log(a + ' / ' + b)
    return 'Division is ' + (a / b)
  }

  static abs (a) {
    if (a >= 0) {
      return a
    } else {
      return a * -1
    }
  }
}

module.exports = MathUtils
