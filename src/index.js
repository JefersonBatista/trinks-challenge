export function isHappyNumber(number) {
  let current = number;

  for (let i = 0; i < 100; i++) {
    const targetSum = squaredDigitsSum(current);

    // Stop condition of the algorithm
    if (targetSum === 1) return true;

    current = targetSum;
  }

  // After 100 unsuccessful iterations, return false
  return false;
}

function squaredDigitsSum(number) {
  const digits = Array.from(number.toString());
  return digits.reduce((acc, digit) => acc + digit * digit, 0);
}

export function isLuckyNumber(number) {
  // Trivial case
  if (number === 1) return true;

  let array = [...Array(number).keys()].map((n) => n + 1);

  // Remove even numbers
  array = array.filter((_, index) => (index + 1) % 2 !== 0);

  let currPos = 2;
  let currNumber = array[currPos - 1];

  while (currPos <= array.length) {
    // Stop condition of the algorithm
    if (currNumber >= number) return true;

    array = array.filter((_, index) => (index + 1) % currNumber !== 0);

    currPos += 1;
    currNumber = array[currPos - 1];
  }

  // The number is no more in the array
  return false;
}
