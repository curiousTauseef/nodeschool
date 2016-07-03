const longDelay = (...args) => {
  let sum = 0;
  args.map(i => sum += i);
  return sum;
};

module.exports = longDelay;
