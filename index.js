/*
This is the entrypoint to this project.
Please, do not fill main() with functions,
but rather create new class for each feature.
*/

const HELLO = require('./hello.js')
const MATH = require('./mathutils.js')

const main = () => {
  console.log('Hello world!')

  console.log(HELLO.sayHello())
  console.log(HELLO.sayGoodNightInGreek())
  console.log('\n' + '-'.repeat(3) + '\nget greeting:')
  console.log(HELLO.getGreeting(42))
  console.log(HELLO.yell(HELLO.getGreeting(666)))
  console.log(HELLO.getGreeting(1))
  console.log('-'.repeat(3) + '\n')

  console.log(HELLO.upTheIrons())
  console.log(HELLO.yell('this is a custom message.'))


  console.log(MATH.sum(5, 5))
  console.log(MATH.divide(10, 5))
  console.log(MATH.abs(3))
  console.log(MATH.abs(-3))
  console.log(MATH.hypotenuse(3, 4))

  console.log(HELLO.yell(HELLO.getGreeting(MATH.sum(40, 2)))+'CRUEL WORLD!')
}

main()
