class MsgFunc {
  constructor(city) {
    this.city = city;
    console.log("how do yo do");
  }

  static func1() {
    return "do you do, the things that you do";
  }

  static func2() {
    return "Finally I got the freaking syntax right!";
  }

  static delayedFunc1() {
    setTimeout(() => this.func1, 2000);
  }
}
module.exports = MsgFunc;
