class MathUtils {
  static sum (a, b) {
    console.log(a + ' + ' + b)
    return 'Sum is ' + (a + b)
  }

  static sumOfThree (a, b, c) {
    // console.log(a + ' + ' + b + ' + ' + c)
    return 'Sum is ' + (a + b + c)
  }

  static subtract (a, b) {
    console.log(a + ' - ' + b)
    return 'Result is ' + (a - b)
  }

  static divide (a, b) {
    return (a / b)
  }

  static multiply (a, b) {
    console.log(a + ' * ' + b)
    return 'Result is ' + (a * b)
  }

  static abs (a) {
    if (a >= 0) {
      return a
    } else {
      return a * -1
    }
  }

  static hypotenuse (stem, height) {
    return Math.sqrt(Math.pow(stem, 2) + Math.pow(height, 2))
  }

  static stemOrHeight (hypotenuse, side) {
    return Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(side, 2))
  }

  static rightTriagleArea (stem, height) {
  }

  static poweroftwo (a) {
    console.log('Number 2 to the power of ' + a)
    return 'Result is ' + Math.pow(2, a)
  }
}

module.exports = MathUtils
