/**
 * Returns the maximum value in an array.
 * 
 * Use Math.max() combined with the spread operator (...) to get the maximum value in 
 * the array.
 * 
 * @example arrayMax([10, 1, 5]) -> 10
 * @param  {any[]} arr
 */
export const arrayMax = (arr: any[]) => Math.max(...arr)

/**
 * Returns the minimum value in an array.
 * 
 * Use Math.min() combined with the spread operator (...) to get the minimum value in 
 * the array.
 * 
 * @example arrayMin([10, 1, 5]) -> 1
 * @param  {any[]} arr
 */
export const arrayMin = (arr: any[]) => Math.min(...arr)

/**
 * Chunks an array into smaller arrays of a specified size.
 * 
 * Use Array.from() to create a new array, that fits the number of chunks that will 
 * be produced. Use Array.slice() to map each element of the new array to a chunk the 
 * length of size. If the original array can't be split evenly, the final chunk will 
 * contain the remaining elements.
 * 
 * @example chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
 * @param  {any[]} arr
 * @param  {number} size
 */
export const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

/**
 * Removes falsey values from an array.
 * 
 * Use Array.filter() to filter out falsey values (false, null, 0, "", undefined, 
 * and NaN).
 * 
 * @example compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> 
 *          [ 1, 2, 3, 'a', 's', 34 ]
 * @param  {any[]} arr
 */
export const compact = (arr: any[]) => arr.filter(Boolean)

/**
 * Counts the occurrences of a value in an array.
 * 
 * Use Array.reduce() to increment a counter each time you encounter the specific 
 * value inside the array.
 * 
 * @example countOccurrences([1,1,2,1,2,3], 1) -> 3
 * @param  {any[]} arr
 * @param  {any} value
 */
export const countOccurrences = (arr: any[], value: any) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)

/**
 * Deep flattens an array.
 * 
 * Use recursion. Use Array.concat() with an empty array ([]) and the spread operator 
 * (...) to flatten an array. 
 * Recursively flatten each element that is an array.
 * 
 * @example deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]
 * @param  {} ...arr.map(v=>(Array.isArray(v
 * @param  {} ?deepFlatten(v
 */
export const deepFlatten = (arr: any[]): never[] => {
  return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))
}

/**
 * Returns the difference between two arrays.
 * 
 * Create a Set from b, then use Array.filter() on a to only keep values not 
 * contained in b.
 * 
 * @example difference([1,2,3], [1,2,4]) -> [3]
 * @param  {any[]} a
 * @param  {any[]} b
 */
export const difference = (a: any[], b: any[]) => {
  const s = new Set(b)
  return a.filter(x => !s.has(x))
}

/**
 * Filters out all values from an array for which the comparator function does not 
 * return true.
 * 
 * Use Array.filter() and Array.find() to find the appropriate values.
 * 
 * @example differenceWith([1, 1.2, 1.5, 3], [1.9, 3], (a,b) => Math.round(a) == 
 *          Math.round(b)) -> [1, 1.2]
 * @param  {any[]} arr
 * @param  {any[]} val
 * @param  {Function} comp
 */
export const differenceWith = (arr: any[], val: any[], comp: Function) =>
  arr.filter(a => !val.find(b => comp(a, b)))

/**
 * Returns all the distinct values of an array.
 * 
 * Use ES6 Set and the ...rest operator to discard all duplicated values.
 * 
 * @example distinctValuesOfArray([1,2,2,3,4,4,5]) -> [1,2,3,4,5]
 * @param  {any[]} arr
 */
export const distinctValuesOfArray = (arr: any[]) => [...new Set(arr)]

/**
 * Removes elements in an array until the passed function returns true. Returns the 
 * remaining elements in the array.
 * 
 * Loop through the array, using Array.slice() to drop the first element of the array 
 * until the returned value from the function is true. Returns the remaining elements.
 * 
 * @example dropElements([1, 2, 3, 4], n => n >= 3) -> [3,4]
 * @param  {any[]} arr
 * @param  {Function} func
 */
export const dropElements = (arr: any[], func: Function) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1)
  return arr
}

/**
 * Returns a new array with n elements removed from the right
 * 
 * Check if n is shorter than the given array and use Array.slice() to slice it 
 * accordingly or return an empty array.
 * 
 * @example dropRight([1,2,3]) -> [1,2]
 * @example dropRight([1,2,3], 2) -> [1]
 * @example dropRight([1,2,3], 42) -> []
 * @param  {any} arr
 * @param  {} n=1
 * @param  {} =>(n<arr.length?arr.slice(0
 * @param  {} arr.length-n
 */
export const dropRight = (arr: any, n = 1) =>
  n < arr.length ? arr.slice(0, arr.length - n) : []

/**
 * Returns every nth element in an array.
 * 
 * Use Array.filter() to create a new array that contains every nth element of a 
 * given array.
 * 
 * @example everyNth([1,2,3,4,5,6], 2) -> [ 1, 3, 5 ]
 * @param  {any[]} arr
 * @param  {number} nth
 */
export const everyNth = (arr: any[], nth: number) =>
  arr.filter((e, i) => i % nth === 0)

/**
 * Filters out the non-unique values in an array.
 * 
 * Use Array.filter() for an array containing only the unique values.
 * 
 * @example filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]
 * @param  {any[]} arr
 */
export const filterNonUnique = (arr: any[]) =>
  arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

/**
 * Flattens an array.
 * 
 * Use Array.reduce() to get all elements inside the array and concat() to flatten 
 * them.
 * 
 * @example flatten([1,[2],3,4]) -> [1,2,3,4]
 * @param  {any[]} arr
 */
export const flatten = (arr: any[]) => arr.reduce((a, v) => a.concat(v), [])

/**
 * Flattens an array up to the specified depth.
 * 
 * Use recursion, decrementing depth by 1 for each level of depth. Use Array.reduce() 
 * and Array.concat() to merge elements or arrays. Base case, for depth equal to 1 
 * stops recursion. Omit the second element, depth to flatten only to a depth of 1 
 * (single flatten).
 * 
 * @example flattenDepth([1,[2],[[[3],4],5]], 2) -> [1,2,[3],4,5]
 * @param  {any[]} arr
 * @param  {} depth=1
 */
export const flattenDepth = (arr: any[], depth = 1) => {
  depth !== 1
    ? arr.reduce(
        (a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v),
        []
      )
    : arr.reduce((a, v) => a.concat(v), [])
}

/**
 * Groups the element of an array based on the given function.
 * 
 * Use Array.map() to map the values of an array to a function or property name. Use 
 * Array.reduce() to create an object, where the keys are produced from the mapped 
 * results.
 * 
 * @example groupBy([6.1, 4.2, 6.3], Math.floor) -> {4: [4.2], 6: [6.1, 6.3]}
 * @example groupBy(['one', 'two', 'three'], 'length') -> 
 *          {3: ['one', 'two'], 5: ['three']}
 * @param  {any[]} arr
 * @param  {Function} func
 */
export const groupBy = (arr: any[], func: Function) => {
  arr
    .map(typeof func === 'function' ? func : val => val[func])
    .reduce((acc: any[], val: any, i: number) => {
      acc[val] = (acc[val] || []).concat(arr[i])
      return acc
    }, {})
}

/**
 * Returns the head of a list.
 * 
 * Use arr[0] to return the first element of the passed array.
 * 
 * @example head([1,2,3]) -> 1
 * @param  {any[]} arr
 */
export const head = (arr: any[]) => arr[0]

/**
 * Returns all the elements of an array except the last one.
 * 
 * Use arr.slice(0,-1)to return all but the last element of the array.
 * 
 * @example initial([1,2,3]) -> [1,2]
 * @param  {any[]} arr
 */
export const initial = (arr: any[]) => arr.slice(0, -1)

/**
 * Initializes an array containing the numbers in the specified range where start and 
 * end are inclusive.
 * 
 * Use Array((end + 1) - start) to create an array of the desired length, Array.map() 
 * to fill with the desired values in a range. You can omit start to use a default 
 * value of 0.
 * 
 * @example initializeArrayWithRange(5) -> [0,1,2,3,4,5]
 * @example initializeArrayWithRange(7, 3) -> [3,4,5,6,7]
 * @param  {number} end
 * @param  {} start=0
 * @param  {end+1-start}} =>Array.from({length
 */
export const initializeArrayWithRange = (end: number, start = 0) =>
  Array.from({ length: end + 1 - start }).map((v, i) => i + start)

/**
 * Initializes and fills an array with the specified values.
 * 
 * Use Array(n) to create an array of the desired length, fill(v) to fill it with the 
 * desired values. You can omit value to use a default value of 0.
 * 
 * @example initializeArrayWithValues(5, 2) -> [2,2,2,2,2]
 * @param  {number} n
 * @param  {} value=0
 * @param  {} =>Array(n
 * @param  {} .fill(value
 */
export const initializeArrayWithValues = (n: number, value = 0) =>
  Array(n).fill(value)

/**
 * Returns a list of elements that exist in both arrays.
 * 
 * Create a Set from b, then use Array.filter() on a to only keep values contained 
 * in b.
 * 
 * @example intersection([1,2,3], [4,3,2]) -> [2,3]
 * @param  {any[]} a
 * @param  {any[]} b
 */
export const intersection = (a: any[], b: any[]) => {
  const s = new Set(b)
  return a.filter(x => s.has(x))
}

/**
 * Returns the last element in an array.
 * 
 * Use arr.length - 1 to compute index of the last element of the given array and 
 * returning it.
 * 
 * @example last([1,2,3]) -> 3
 * @param  {any[]} arr
 */
const last = (arr: any[]) => arr[arr.length - 1]

/**
 * Maps the values of an array to an object using a function, where the key-value 
 * pairs consist of the original value as the key and the mapped value.
 * 
 * Use an anonymous inner function scope to declare an undefined memory space, using 
 * closures to store a return value. Use a new Array to stor the array with a map of 
 * the function over its data set and a comma operator to return a second step, without 
 * needing to move from one context to another (due to closures and order of operations).
 * 
 * @example const squareIt = arr => mapObject(arr, a => a*a)
 * @param  {any[]} arr
 * @param  {Function} fn
 */
const mapObject = (arr: any[], fn: Function) => {
  ;(a => (
    (a = [arr, arr.map(fn)]),
    a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))()
}

/**
 * Returns the nth element of an array.
 * 
 * Use Array.slice() to get an array containing the nth element at the first place. 
 * If the index is out of bounds, return []. Omit the second argument, n, to get the 
 * first element of the array.
 * 
 * @example nthElement(['a','b','c'],1) -> 'b'
 * @example nthElement(['a','b','b'],-3) -> 'a'
 * @param  {any[]} arr
 * @param  {} n=0
 */
export const nthElement = (arr: any[], n = 0) =>
  (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0]

/**
 * Picks the key-value pairs corresponding to the given keys from an object.
 * 
 * Use Array.reduce() to convert the filtered/picked keys back to a object with the 
 * corresponding key-value pair if the key exist in the obj.
 * 
 * @example pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']) -> { 'a': 1, 'c': 3 }
 * @param  {any} obj
 * @param  {any[]} arr
 */
export const pick = (obj: any, arr: any[]) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {})

/**
 * Mutates the original array to filter out the values specified.
 * 
 * Use Array.filter() and Array.includes() to pull out the values that are not needed. 
 * Use Array.length = 0 to mutate the passed in array by resetting it's length to zero 
 * and Array.push() to re-populate it with only the pulled values.
 * (For a snippet that does not mutate the original array see without)
 * 
 * @example let myArray1 = ['a', 'b', 'c', 'a', 'b', 'c'];
 *          pull(myArray1, 'a', 'c');
 *          console.log(myArray1) -> [ 'b', 'b' ]
 * @example let myArray2 = ['a', 'b', 'c', 'a', 'b', 'c'];
 *          pull(myArray2, ['a', 'c']);
 *          console.log(myArray2) -> [ 'b', 'b' ]
 * @param  {any[]} arr
 * @param  {any[]} ...args
 */
export const pull = (arr: any[], ...args: any[]) => {
  let pulled = arr.filter(
    (v, i) =>
      !args
        .toString()
        .split(',')
        .includes(v)
  )
  arr.length = 0
  pulled.forEach(v => arr.push(v))
}

/**
 * Mutates the original array to filter out the values at the specified indexes.
 * 
 * Use Array.filter() and Array.includes() to pull out the values that are not needed. 
 * Use Array.length = 0 to mutate the passed in array by resetting it's length to zero 
 * and Array.push() to re-populate it with only the pulled values. Use Array.push() to 
 * keep track of pulled values
 * 
 * @example let myArray = ['a', 'b', 'c', 'd'];
 *          let pulled = pullAtIndex(myArray, [1, 3]);
 *          console.log(myArray); -> [ 'a', 'c' ]
 *          console.log(pulled); -> [ 'b', 'd' ]
 * @param  {any[]} arr
 * @param  {any[]} pullArr
 */
export const pullAtIndex = (arr: any[], pullArr: any[]) => {
  let removed: any[] = []
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i))
  arr.length = 0
  pulled.forEach(v => arr.push(v))
  return removed
}
/**
 * Mutates the original array to filter out the values specified. Returns the removed 
 * elements.
 * 
 * Use Array.filter() and Array.includes() to pull out the values that are not needed. 
 * Use Array.length = 0 to mutate the passed in array by resetting it's length to zero 
 * and Array.push() to re-populate it with only the pulled values. Use Array.push() to 
 * keep track of pulled values
 * 
 * @example let myArray = ['a', 'b', 'c', 'd'];
 *          let pulled = pullAtValue(myArray, ['b', 'd']);
 *          console.log(myArray); -> [ 'a', 'c' ]
 *          console.log(pulled); -> [ 'b', 'd' ]
 * @param  {any[]} arr
 * @param  {any[]} pullArr
 */
export const pullAtValue = (arr: any[], pullArr: any[]) => {
  let removed: any[] = []
  let pushToRemove = arr.forEach(
    (v, i) => (pullArr.includes(v) ? removed.push(v) : v)
  )
  let mutateTo = arr.filter((v, i) => !pullArr.includes(v))
  arr.length = 0
  mutateTo.forEach(v => arr.push(v))
  return removed
}

/**
 * Removes elements from an array for which the given function returns false.
 * 
 * Use Array.filter() to find array elements that return truthy values and Array.reduce() 
 * to remove elements using Array.splice(). The func is invoked with three arguments 
 * (value, index, array).
 * 
 * @example remove([1, 2, 3, 4], n => n % 2 == 0) -> [2, 4]
 * @param  {any[]} arr
 * @param  {any} func
 */
export const remove = (arr: any[], func: any) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc: any[], val) => {
        arr.splice(arr.indexOf(val), 1)
        return acc.concat(val)
      }, [])
    : []

/**
 * Returns a random element from an array.
 * 
 * Use Math.random() to generate a random number, multiply it with length and round 
 * it of to the nearest whole number using Math.floor(). This method also works with 
 * strings.
 * 
 * @example sample([3, 7, 9, 11]) -> 9
 * @param  {any[]} arr
 */
export const sample = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)]

/**
 * Randomizes the order of the values of an array.
 * 
 * Use Array.sort() to reorder elements, using Math.random() in the comparator.
 * 
 * @example shuffle([1,2,3]) -> [2,3,1]
 * @param  {any[]} arr
 */
export const shuffle = (arr: any[]) => arr.sort(() => Math.random() - 0.5)

/**
 * Returns an array of elements that appear in both arrays.
 * 
 * Use filter() to remove values that are not part of values, determined using includes().
 * 
 * @example similarity([1,2,3], [1,2,4]) -> [1,2]
 * @param  {any[]} arr
 * @param  {any[]} values
 */
export const similarity = (arr: any[], values: any[]) =>
  arr.filter(v => values.includes(v))

/**
 * Returns the symmetric difference between two arrays.
 * 
 * Create a Set from each array, then use Array.filter() on each of them to only keep 
 * values not contained in the other.
 * 
 * @example symmetricDifference([1,2,3], [1,2,4]) -> [3,4]
 * @param  {any[]} a
 * @param  {any[]} b
 */
export const symmetricDifference = (a: any[], b: any[]) => {
  const sA = new Set(a)
  const sB = new Set(b)
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))]
}

/**
 * Returns all elements in an array except for the first one.
 * 
 * Return arr.slice(1) if the array's length is more than 1, otherwise return the 
 * whole array.
 * 
 * @example tail([1,2,3]) -> [2,3]
 * @example tail([1]) -> [1]
 * @param  {any[]} arr
 * @returns arr
 */
export const tail = (arr: any[]) => (arr.length > 1 ? arr.slice(1) : arr)

/**
 * Returns an array with n elements removed from the beginning.
 * 
 * Use Array.slice() to create a slice of the array with n elements taken from the 
 * beginning.
 * 
 * @example take([1, 2, 3], 5) -> [1, 2, 3]
 * @example take([1, 2, 3], 0) -> []
 * @param  {any[]} arr
 * @param  {} n=1
 */
export const take = (arr: any[], n = 1) => arr.slice(0, n)

/**
 * Returns an array with n elements removed from the end.
 * 
 * Use Array.slice() to create a slice of the array with n elements taken from the end.
 * 
 * @example takeRight([1, 2, 3], 2) -> [ 2, 3 ]
 * @example takeRight([1, 2, 3]) -> [3]
 * @param  {any[]} arr
 * @param  {} n=1
 */
export const takeRight = (arr: any[], n = 1) =>
  arr.slice(arr.length - n, arr.length)

/**
 * Returns every element that exists in any of the two arrays once.
 * 
 * Create a Set with all values of a and b and convert to an array.
 * 
 * @example union([1,2,3], [4,3,2]) -> [1,2,3,4]
 * @param  {any[]} a
 * @param  {any[]} b
 */
export const union = (a: any[], b: any[]) => Array.from(new Set([...a, ...b]))

/**
 * Filters out the elements of an array, that have one of the specified values.
 * 
 * Use Array.filter() to create an array excluding(using !Array.includes()) all 
 * given values.
 * (For a snippet that mutates the original array see pull)
 * 
 * @example without([2, 1, 2, 3], 1, 2) -> [3]
 * @param  {any[]} arr
 * @param  {any[]} ...args
 */
export const without = (arr: any[], ...args: any[]) =>
  arr.filter(v => !args.includes(v))

/**
 * Creates an array of elements, grouped based on the position in the original arrays.
 * 
 * Use Math.max.apply() to get the longest array in the arguments. Creates an array 
 * with that length as return value and use Array.from() with a map-function to create 
 * an array of grouped elements. If lengths of the argument-arrays vary, undefined is 
 * used where no value could be found.
 * 
 * @example zip(['a', 'b'], [1, 2], [true, false]); -> [['a', 1, true], ['b', 2, false]]
 * @example zip(['a'], [1, 2], [true, false]); -> [['a', 1, true], [undefined, 2, false]]
 * @param  {any[]} ...arrays
 */
export const zip = (...arrays: any[]) => {
  const maxLength = Math.max(...arrays.map(x => x.length))
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i])
  })
}
