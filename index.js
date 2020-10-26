/*
This is the entrypoint to this project.
Please, do not fill main() with functions,
but rather create new class for each feature.
*/

const MATH = require("./mathutils.js");
const UTILS = require("./utils.js");
const HANDLER = require("./msgHandler.js");
const MsgFunc = require("./msgFunc");
const func = new MsgFunc("manse");

const main = () => {
  console.log(HANDLER.yell("HellO WOrld! " + UTILS.getLine()).repeat(2));

  console.log(UTILS.getTopBreaker());
  console.log(UTILS.getLine() + "Here are some lyrics for the song:");
  console.log(func);
  console.log(func.func2());

  console.log(HANDLER.getGreeting(4));
  console.log(HANDLER.getGreeting(42));
  console.log(HANDLER.yell(HANDLER.getGreeting(666)));
  console.log(HANDLER.yell(HANDLER.getGreeting(1)).repeat(6));
  console.log(HANDLER.feelTheGame().repeat(MATH.sum(2, 1)));
  console.log(HANDLER.getGreeting(2020).repeat(MATH.sum(2, 1)));
  console.log(UTILS.getLine() + HANDLER.getGreeting(1985));
  console.log(HANDLER.getGreeting(0));
  console.log(UTILS.getLine() + HANDLER.scream("Tampere"));
  console.log(HANDLER.yell(HANDLER.getGreeting(0)));
  console.log(UTILS.getLine() + HANDLER.getGreeting(5));
  console.log(HANDLER.yell(HANDLER.getGreeting(4)));
  console.log("");

  console.log(MATH.sum(40, 2));
  console.log(MATH.sumOfThree(10, 10, 10));
  console.log(MATH.divide(100, 10));
  console.log(MATH.countPercents(1000, 12));
  console.log(MATH.sumInner(5)(5));
  console.log(MATH.countBMI(170, 75));
  console.log("Area of square: " + MATH.area(2, 2));
  console.log("Propability to get 3 in dice: " + MATH.probability(1, 6));
  console.log(
    "Probability not to get 3 in dice: " + MATH.probabilityNotHappen(1, 6)
  );
  console.log(
    "Probability to get yellow, red and white: " +
      MATH.combinationProbability([4, 5, 11], 20)
  );
  console.log(MATH.triangleAngle(40, 30));
  console.log(MATH.eclipseArea(3, 5));
  console.log(
    "Radius of inner circle of triangle: " +
      MATH.innerCircleRadius(3, 4, 5, MATH.rightTriagleArea(3, 4))
  );
};

main();
