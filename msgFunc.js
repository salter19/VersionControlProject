const MsgFunc = function (city) {
  if (this instanceof MsgFunc) {
    this.city = city;
    console.log("how do yo do");
  } else {
    throw new TypeError("Please use keyword new.");
  }

  func1: () => {
    return "Here is the MsgFunc!";
  };
};

module.exports = MsgFunc;
