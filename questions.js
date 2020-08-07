const options = {
  selfEstem: ["high", "medium", "low"],
  problem: ["personal", "relational", "careless", "mistake"],
  flaw: ["anxiouss", "ego", "too much empathy", "too little empathy"],
};

function whoseFaultIsIt(selfEsteem, problem, flaw) {
  let result = "unknown right now";
  if (
    selfEsteem === "high" &&
    problem === "careless" &&
    flaw === "too little empthaty"
  ) {
    result = "it's someone else's fault";
  } else if (
    selfEsteem === "low" &&
    problem === "mistake" &&
    flaw === "too much empathy"
  ) {
    result = "it's your fault. isn't it always? fix this immediately.";
  } else if (
    selfEsteem === "medium" &&
    problem === "relational" &&
    flaw === "anxious"
  ) {
    result =
      "it might be all you're fault, but it's probably not. talk to whomever you're having this problem with.";
  }
  return result;
}

console.log(whoseFaultIsIt("low", "mistake", "too much empathy"));
