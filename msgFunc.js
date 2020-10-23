const MsgFunc = function (city) {
  if (this instanceof MsgFunc) {
    this.city = city;
    console.log("how do yo do");
    this.func1 = function () {
      return "do you do, the things that you do";
    };
  } else {
    throw new TypeError("Please use keyword new.");
  }
};

module.exports = MsgFunc;
