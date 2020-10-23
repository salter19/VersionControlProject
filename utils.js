// This class could contain methods to prevent some repeating of code
class Utils {
  static getTopBreaker () {
    return '\n' + '-'.repeat(3)
  }
  static getBottomBreaker () {
    return '-'.repeat(3) + '\n'
  }
  static getLine () {
    return ' -> ';
  }
}

module.exports = Utils
