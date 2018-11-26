function sum(...nums) {
  return nums.reduce((acc, el2) => {
    return acc += el2;
  });
}