class MsgFunc {
  constructor(city) {
    this.city = city;
    console.log("how do yo do");
    this.func1 = this.func1.bind(this);
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
