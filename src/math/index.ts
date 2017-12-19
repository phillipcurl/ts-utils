/**
 * Returns the average of an array of numbers.
 * 
 * Use Array.reduce() to add each value to an accumulator, initialized with a value 
 * of 0, divide by the length of the array.
 * 
 * @example arrayAverage([1,2,3]) -> 2
 * @param  {any[]} arr
 */
export const arrayAverage = (arr: any[]) =>
  arr.reduce((acc, val) => acc + val, 0) / arr.length

/**
 * Returns the sum of an array of numbers.
 * 
 * Use Array.reduce() to add each value to an accumulator, initialized with a value 
 * of 0.
 * 
 * @example arraySum([1,2,3,4]) -> 10
 * @param  {any[]} arr
 */
export const arraySum = (arr: any[]) => arr.reduce((acc, val) => acc + val, 0)

/**
 * Applies the Collatz algorithm.
 * 
 * If n is even, return n/2. Otherwise return 3n+1.
 * 
 * @example collatz(8) --> 4
 *          collatz(5) --> 16
 * @param  {number} n
 */
export const collatz = (n: number) => (n % 2 === 0 ? n / 2 : 3 * n + 1)

/**
 * Converts a number to an array of digits.
 * 
 * Convert the number to a string, using spread operators in ES6([...string]) build 
 * an array. Use Array.map() and parseInt() to transform each value to an integer.
 * 
 * @example digitize(2334) -> [2, 3, 3, 4]
 * @param  {number} n
 */
export const digitize = (n: number) => [...('' + n)].map(i => parseInt(i))

/**
 * Returns the distance between two points.
 * 
 * Use Math.hypot() to calculate the Euclidean distance between two points.
 * 
 * @example distance(1,1, 2,3) -> 2.23606797749979
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 */
export const distance = (x0: number, y0: number, x1: number, y1: number) =>
  Math.hypot(x1 - x0, y1 - y0)

/**
 * Calculates the factorial of a number.
 * 
 * Use recursion. If n is less than or equal to 1, return 1. Otherwise, return the 
 * product of n and the factorial of n - 1. Throws an exception if n is a negative 
 * number.
 * 
 * @example factorial(6) -> 720
 * @param  {number} n
 */
export const factorial = (n: number): number => {
  return n < 0
    ? (() => {
        throw new TypeError('Negative numbers are not allowed!')
      })()
    : n <= 1 ? 1 : n * factorial(n - 1)
}

/**
 * Generates an array, containing the Fibonacci sequence, up until the nth term.
 * 
 * Create an empty array of the specific length, initializing the first two values 
 * (0 and 1). Use Array.reduce() to add values into the array, using the sum of the 
 * last two values, except for the first two.
 * 
 * @example fibonacci(5) -> [0,1,1,2,3]
 * @param  {number} n
 */
export const fibonacci = (n: number) =>
  Array(n)
    .fill(0)
    .reduce(
      (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
      []
    )

/**
 * Calculates the greatest common divisor between two numbers.
 * 
 * Use recursion. Base case is when y equals 0. In this case, return x. Otherwise, 
 * return the GCD of y and the remainder of the division x/y.
 * 
 * @example gcd (8, 36) -> 4
 * @param  {number} x
 * @param  {number} y
 */
export const gcd = (x: number, y: number): number => {
  return !y ? x : gcd(y, x % y)
}

/**
 * Calculates the Hamming distance between two values.
 * 
 * Use XOR operator (^) to find the bit difference between the two numbers, convert 
 * to binary string using toString(2). Count and return the number of 1s in the 
 * string, using match(/1/g).
 * 
 * @example hammingDistance(2,3) -> 1
 * @param  {number} num1
 * @param  {number} num2
 */
export const hammingDistance = (num1: number, num2: number) =>
  ((num1 ^ num2).toString(2).match(/1/g) || '').length

/**
 * Checks if the first numeric argument is divisible by the second one.
 * 
 * Use the modulo operator (%) to check if the remainder is equal to 0.
 * 
 * @example isDivisible(6,3) -> true
 * @param  {number} dividend
 * @param  {number} divisor
 */
export const isDivisible = (dividend: number, divisor: number) =>
  dividend % divisor === 0

/**
 * Returns true if the given number is even, false otherwise.
 * 
 * Checks whether a number is odd or even using the modulo (%) operator. Returns true 
 * if the number is even, false if the number is odd.
 * 
 * @example isEven(3) -> false
 * @param  {number} num
 */
export const isEven = (num: number) => num % 2 === 0

/**
 * Returns the least common multiple of two numbers.
 * 
 * Use the greatest common divisor (GCD) formula and Math.abs() to determine the 
 * least common multiple. The GCD formula uses recursion.
 * 
 * @example lcm(12,7) -> 84
 * @param  {number} x
 * @param  {number} y
 */
export const lcm = (x: number, y: number) => {
  const gcd = (x: number, y: number): number => {
    return !y ? x : gcd(y, x % y)
  }
  return Math.abs(x * y) / gcd(x, y)
}

/**
 * Returns the median of an array of numbers.
 * 
 * Find the middle of the array, use Array.sort() to sort the values. Return the 
 * number at the midpoint if length is odd, otherwise the average of the two middle 
 * numbers.
 * 
 * @example median([5,6,50,1,-5]) -> 5
 * @example median([0,10,-2,7]) -> 3.5
 * @param  {number[]} arr
 */
export const median = (arr: number[]) => {
  const mid = Math.floor(arr.length / 2)
  const nums = [...arr].sort((a, b) => a - b)
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

/**
 * Returns true if the given string is a palindrome, false otherwise.
 * 
 * Convert string toLowerCase() and use replace() to remove non-alphanumeric 
 * characters from it. Then, split('') into individual characters, reverse(), 
 * join('') and compare to the original, unreversed string, after converting it 
 * tolowerCase().
 * 
 * @example palindrome('taco cat') -> true
 * @param  {string} str
 */
export const palindrome = (str: string) => {
  const s = str.toLowerCase().replace(/[\W_]/g, '')
  return (
    s ===
    s
      .split('')
      .reverse()
      .join('')
  )
}

/**
 * Uses the percentile formula to calculate how many numbers in the given array are 
 * less or equal to the given value.
 * 
 * Use Array.reduce() to calculate how many numbers are below the value and how many 
 * are the same value and apply the percentile formula.
 * 
 * @example percentile([1,2,3,4,5,6,7,8,9,10], 6) -> 55
 * @param  {number[]} arr
 * @param  {number} val
 */
export const percentile = (arr: number[], val: number) =>
  100 *
  arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0) /
  arr.length

/**
 * Returns the powerset of a given array of numbers.
 * 
 * Use Array.reduce() combined with Array.map() to iterate over elements and combine 
 * into an array containing all combinations.
 * 
 * @example powerset([1,2]) -> [[], [1], [2], [2,1]]
 * @param  {number[]} arr
 */
export const powerset = (arr: number[]) =>
  arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]])
