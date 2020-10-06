/*
This is the entrypoint to this project.
Please, do not fill main() with functions,
but rather create new class for each feature.
*/

const HELLO = require('./hello.js')
const MATH = require('./mathutils.js')

const main = () => {
  console.log('Hello world!')
  HELLO.sayHello()
  console.log(MATH.sum(5, 5))
}

main()
