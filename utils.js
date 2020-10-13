// This class could contain methods to prevent some repeating of code
class Utils {
  static getTopBreaker () {
    return '\n' + '-'.repeat(3)
  }
  static getBottomBreaker () {
    return '-'.repeat(3) + '\n'
  }
  static yell (method) {
  const str = method
  /* if the last character is not "." or "!"
     then ! will be added
  */
  let ending = '!'
  if (str.charAt(str.length - 1) === '!') {
    ending = ''
    } else if (str.charAt(str.length - 1) === '.') {
    ending = ''
    }
  return str.toUpperCase() + ending
  }

}

module.exports = Utils
