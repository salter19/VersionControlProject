/*
This is the entrypoint to this project.
Please, do not fill main() with functions,
but rather create new class for each feature.
*/

const HELLO = require('./hello.js')
const MATH = require('./mathutils.js')
const UTILS = require('./utils.js')
const HANDLER = require('./msgHandler.js')

const main = () => {
  console.log(HANDLER.yell('HellO WOrld!'))

  console.log(UTILS.getTopBreaker())
  console.log('GEt GrEEtinG:')
  console.log(HANDLER.getGreeting(HELLO, 4))
  console.log(HANDLER.getGreeting(HELLO, 42))
  console.log(HANDLER.yell(HANDLER.getGreeting(HELLO, 666)))
  console.log((HANDLER.yell(HANDLER.getGreeting(HELLO, 1)).repeat(6)))
  console.log(HANDLER.scream('Tampere'))
  console.log(HANDLER.feelTheGame().repeat(MATH.sum(2, 1)))
  console.log(UTILS.getBottomBreaker())

  console.log(HANDLER.yell(HANDLER.getGreeting(HELLO, parseInt(
    MATH.sum(40, 2)))) + ' and hello world.')
  console.log(HANDLER.getGreeting(HELLO, 1985))
  console.log(HANDLER.getGreeting(HELLO, 0))
  console.log(HANDLER.getGreeting(HELLO, 1985))
  console.log(UTILS.getBottomBreaker().repeat(1))

  console.log(MATH.sum(40, 2))
  console.log(MATH.sumOfThree(10, 10, 10))
  console.log(MATH.multiply(5, 120))
  // console.log('Division of 10/5 is: ' + MATH.divide(10, 5))
  // console.log('Absolute of 3 is: ' + MATH.abs(3))
  // console.log('Absolute of -3 is: ' + MATH.abs(-3))

  // console.log('Hypotenuse of a right triangle (3, 4) is : ' + MATH.hypotenuse(3, 4))
  // console.log('Stem of a right triangle (5, 3) is : ' + MATH.stemOrHeight(5, 3))
  // console.log('Area of right triangle (3, 4) is : ' + MATH.rightTriagleArea(3, 4))
  // console.log('Area of circle (r = 2) is : ' + MATH.circleArea(2))
  // console.log('Circumference (r = 2) is : ' + MATH.circumference(2))
  console.log(MATH.poweroftwo(3))
  console.log(MATH.getOnePercent(124))
  console.log(MATH.addVAT(100))
  console.log(MATH.countValueWithoutVAT(124))
  MATH.countPercents(1000, 12)
  console.log(MATH.sumInner(5)(5))
  console.log(MATH.countBMI(170, 75))
  console.log('Area: ' + MATH.area(2, 2))
  console.log('Propability to get 3 in dice: ' + MATH.probability(1, 6))
  console.log('Probability not to get 3 in dice: ' + MATH.probabilityNotHappen(1, 6))
}

main()
