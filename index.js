/*
This is the entrypoint to this project.
Please, do not fill main() with functions,
but rather create new class for each feature.
*/

const HELLO = require('./hello.js')
const MATH = require('./mathutils.js')
const UTILS = require('./utils.js')

const main = () => {
  console.log(UTILS.yell('Hello World!'))

  console.log(HELLO.sayHello())
  console.log(HELLO.sayGoodnightInGreek())

  console.log(UTILS.getTopBreaker())
  console.log('get greeting:')
  console.log(HELLO.greet(4))
  console.log(HELLO.greet(42))
  console.log(HELLO.greet(0))
  console.log(UTILS.yell(HELLO.greet(666)))
  console.log((UTILS.yell(HELLO.greet(1)).repeat(3)))
  console.log(HELLO.feelTheGame())
  console.log(HELLO.feelTheGame().repeat(MATH.sum(2, 40)))
  console.log(UTILS.getBottomBreaker())

  console.log(UTILS.yell('help i can\'t stop screaming'))

  console.log(UTILS.yell(HELLO.greet(parseInt(
    MATH.sum(40, 2)))) + ' CRUEL WORLD!')

  console.log(UTILS.yell(HELLO.greet(0)))
  console.log(UTILS.getBottomBreaker())

  console.log(MATH.sum(40, 2))
  console.log(MATH.sumOfThree(10, 10, 10))
  console.log(MATH.multiply(5, 120))
  console.log('Division of 10/5 is: ' + MATH.divide(10, 5))
  console.log('Absolute of 3 is: ' + MATH.abs(3))
  console.log('Absolute of -3 is: ' + MATH.abs(-3))

  console.log('Hypotenuse of a right triangle (3, 4) is : ' + MATH.hypotenuse(3, 4))
  console.log('Stem of a right triangle (5, 3) is : ' + MATH.stemOrHeight(5, 3))
  console.log('Area of right triangle (3, 4) is : ' + MATH.rightTriagleArea(3, 4))
  console.log('Area of circle (r = 2) is : ' + MATH.circleArea(2))
  console.log('Circumference (r = 2) is : ' + MATH.circumference(2))
  console.log(MATH.poweroftwo(3))
  console.log(MATH.getOnePercent(124))
  MATH.addVAT(100)
  MATH.countValueWithoutVAT(124)
}

main()
