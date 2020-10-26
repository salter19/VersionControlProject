class MsgFunc {
  constructor(city) {
    this.city = city;
    this.func1 = this.func1.bind(this);
  }

  func1() {
    return `Hello ${this.city}`;
  }

  func2() {
    return "Finally I got the freaking syntax right!";
  }

  delayedFunc1() {
    setTimeout(this.func1, 2000);
  }

  func3() {
    return this.func1;
  }
}
module.exports = MsgFunc;
