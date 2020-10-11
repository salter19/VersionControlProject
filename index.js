/*
This is the entrypoint to this project.
Please, do not fill main() with functions,
but rather create new class for each feature.
*/

const HELLO = require('./hello.js')
const MATH = require('./mathutils.js')

const main = () => {
  console.log('Hello World!')

  console.log(HELLO.sayHello())
  console.log(HELLO.sayGoodnightInGreek())

  console.log('\n' + '-'.repeat(3) + '\nget greeting:')
  console.log(HELLO.getGreeting(42))
  console.log(HELLO.yell(HELLO.getGreeting(666)))
  console.log(HELLO.getGreeting(1))
  console.log(HELLO.feelTheGame())
  console.log(HELLO.feelTheGame() * MATH.powerOfTwo(2))
  console.log('-'.repeat(3) + '\n')

  console.log(HELLO.yell('Is this is a custom message?'))
  console.log(HELLO.yell('help i can\'t stop screaming'))
  console.log(HELLO.yell(HELLO.getGreeting(parseInt
    (MATH.sum(40, 2))))+'CRUEL WORLD!')


  console.log('+'.repeat(3) + '\n')

  console.log(MATH.sum(40, 2))

  console.log(MATH.sum(5, 5))
  console.log(MATH.sumOfThree(10, 10, 10))
  console.log('Division of 10/5 is: ' + MATH.divide(10, 5))
  console.log('Absolute of 3 is: ' + MATH.abs(3))
  console.log('Absolute of -3 is: ' + MATH.abs(-3))

  console.log('Hypotenuse of a right triangle (3, 4) is : ' + MATH.hypotenuse(3, 4))
  console.log('Stem of a right triangle (5, 3) is : ' + MATH.stemOrHeight(5, 3))
  console.log(MATH.poweroftwo(3))

  console.log(HELLO.yell(HELLO.getGreeting(MATH.sum(40, 2))) + 'CRUEL WORLD!')

}

main()
