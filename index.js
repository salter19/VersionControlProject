/*
This is the entrypoint to this project.
Please, do not fill main() with functions,
but rather create new class for each feature.
*/

const HELLO = require('./hello.js')

const main = () => {
  console.log('Hello world!')
  console.log(HELLO.sayHello())
  console.log(HELLO.sayGoodNightInGreek())
}

main()
