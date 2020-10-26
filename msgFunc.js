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
}

module.exports = MsgFunc;
