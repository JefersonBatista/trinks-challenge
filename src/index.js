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
  // Trivial cases
  if (number === 1) return true;
  if (number % 2 === 0) return false;

  let array = [...Array(number).keys()].map((n) => n + 1);

  // Remove even numbers
  array = array.filter((_, index) => (index + 1) % 2 !== 0);

  let currPos = 2;
  let currNumber = array[currPos - 1];

  while (true) {
    // Update array: delete numbers in positions multiple of currNumber
    array = array.filter((_, index) => (index + 1) % currNumber !== 0);
    const found = array.find((n) => n === number);

    // The number is no more in the array
    if (!found) return false;

    // Go to next step
    currPos += 1;
    currNumber = array[currPos - 1];

    // The number will remain in the array
    if (!currNumber || currNumber > array.length) return true;
  }
}
