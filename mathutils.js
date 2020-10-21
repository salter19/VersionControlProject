class MathUtils {
  static sum (a, b) {
    return a + ' + ' + b + ' = ' + (a + b)
  }

  static sumOfThree (a, b, c) {
    return a + ' + ' + b + ' + ' + c + ' = ' + (a + b + c)
  }

  static getOnePercent (a) {
    return '1 % of ' + a + ' = ' + (a / 100)
  }

  static countPercents (value, percent) {
    return percent + "% of value " + value + " = " + (percent / 100 * value)
  }

  static addVAT (value) {
    // console.log('Price without VAT: ' + value)
    // console.log('Price with VAT: ' + value * 1.24)
    return value + (" (VAT 0%) => ") + value * 1.24 + (" (VAT 24%)")
  }

  static countValueWithoutVAT (value) {
    // console.log('Price with VAT: ' + value)
    // console.log('Price without VAT: ' + value / 124 * 100)
    return value / 124 * 100
  }

  static subtract (a, b) {
    // console.log(a + ' - ' + b)
    return a - b
  }

  static countBMI (height, weight) {
    if (height < 3) {
      return 'Please insert the height in centimeters.'
    } else {
      // console.log("Your height is: " + height)
      // console.log("Your weight is: " + weight)
      // console.log("Your BMI is: " + weight/(height/100)/(height/100))
      return 'Your BMI is: ' + this.roundWithTwo(weight / (height / 100) / (height / 100))
    }
  }

  static divide (a, b) {
    return (a / b)
  }

  static multiply (a, b) {
    return a + ' * ' + b + ' = ' + (a * b)
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
    return stem * height / 2
  }

  static triangleAngle (first, second) {
    return 180 - first - second
  }

  static circumference (radius) {
    return 2 * radius * Math.PI
  }

  static circleRadius (circumference) {
    return circumference / (2 * Math.PI)
  }

  static circleArea (radius) {
    return Math.PI * Math.pow(radius, 2)
  }

  static area (stem, height) {
    return stem * height
  }

  static eclipseArea (minor, major) {
    return Math.round(((minor * major * Math.PI) + Number.EPSILON) * 100) / 100
  }

  static probability (wanted, amount) {
    return Math.round(((wanted / amount) + Number.EPSILON) * 100) / 100
  }

  static probabilityNotHappen (wanted, amount) {
    return Math.round((((amount - wanted) / amount) + Number.EPSILON) * 100) / 100
  }

  static combinationProbability (wantedArray, amount) {
    let prop = 1
    for (const i in wantedArray) {
      prop = prop * (wantedArray[i] / amount)
      amount--
    }
    return Math.round(((prop) + Number.EPSILON) * 100) / 100
  }

  static roundWithTwo (num) {
    return Math.round(((num) + Number.EPSILON) * 100) / 100
  }

  static poweroftwo (a) {
    console.log('Number 2 to the power of ' + a)
    return 'Result is ' + Math.pow(2, a)
  }

  static sumInner (a) {
    const inner = (b) => a + b
    return inner
  }
}

module.exports = MathUtils
