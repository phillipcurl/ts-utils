/**
 * Chains asynchronous functions.
 * 
 * Loop through an array of functions containing asynchronous events, calling next 
 * when each asynchronous event has completed.
 * 
 * @example chainAsync([
 *            next => { console.log('0 seconds'); setTimeout(next, 1000); }, 
 *            next => { console.log('1 second');  setTimeout(next, 1000); }, 
 *            next => { console.log('2 seconds'); }
 *          ])
 * @param  {Function[]} fns
 */
export const chainAsync = (fns: Function[]) => {
  let curr = 0
  const next = () => fns[curr++](next)
  next()
}

/**
 * Performs right-to-left function composition.
 * 
 * Use Array.reduce() to perform right-to-left function composition. The last 
 * (rightmost) function can accept one or more arguments; the remaining functions 
 * must be unary.
 * 
 * @example const add5 = x => x + 5
 *          const multiply = (x, y) => x * y
 *          const multiplyAndAdd5 = compose(add5, multiply)
 *          multiplyAndAdd5(5, 2) -> 15
 * @param  {Function[]} ...fns
 */
export const compose = (...fns: Function[]) =>
  fns.reduce((f, g) => (...args: any[]) => f(g(...args)))

/**
 * Curries a function.
 * 
 * Use recursion. If the number of provided arguments (args) is sufficient, call the 
 * passed function f. Otherwise return a curried function f that expects the rest of 
 * the arguments. If you want to curry a function that accepts a variable number of 
 * arguments (a variadic function, e.g. Math.min()), you can optionally pass the 
 * number of arguments to the second parameter arity.
 * 
 * @example curry(Math.pow)(2)(10) -> 1024
 *          curry(Math.min, 3)(10)(50)(2) -> 2
 * @param  {Function} fn
 * @param  {} arity=fn.length
 * @param  {any[]} ...args
 */
export const curry = (fn: Function, arity = fn.length, ...args: any[]) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)

/**
 * Logs the name of a function.
 * 
 * Use console.debug() and the name property of the passed method to log the method's 
 * name to the debug channel of the console.
 * 
 * @example functionName(Math.max) -> max (logged in debug channel of console)
 * @param  {Function} fn
 */
export const functionName = (fn: Function) => (console.debug(fn.name), fn)

/**
 * Performs left-to-right function composition.
 * 
 * Use Array.reduce() with the spread operator (...) to perform left-to-right 
 * function composition. The first (leftmost) function can accept one or more 
 * arguments; the remaining functions must be unary.
 * 
 * @example const add5 = x => x + 5
 *          const multiply = (x, y) => x * y
 *          const multiplyAndAdd5 = pipeFunctions(multiply, add5)
 *          multiplyAndAdd5(5, 2) -> 15
 * @param  {Function[]} ...fns
 */
export const pipeFunctions = (...fns: Function[]) =>
  fns.reduce((f, g) => (...args: any[]) => g(f(...args)))

/**
 * Converts an asynchronous function to return a promise.
 * 
 * Use currying to return a function returning a Promise that calls the original 
 * function. Use the ...rest operator to pass in all the parameters.
 * In Node 8+, you can use util.promisify
 * 
 * @example const delay = promisify((d, cb) => setTimeout(cb, d))
 *          delay(2000).then(() => console.log('Hi!')) -> Promise resolves after 2s
 * @param  {Function} fn
 */
export const promisify = (fn: Function) => (...args: any[]) =>
  new Promise((resolve, reject) =>
    fn(
      ...args,
      (err: any, result: any) => (err ? reject(err) : resolve(result))
    )
  )

/**
 * Runs an array of promises in series.
 * 
 * Use Array.reduce() to create a promise chain, where each promise returns the next 
 * promise when resolved.
 * 
 * @example const delay = (d) => new Promise(r => setTimeout(r, d))
 *          runPromisesInSeries([() => delay(1000), () => delay(2000)]) -> 
 *          executes each promise sequentially, taking a total of 3 seconds to complete
 * @param  {any} ps
 */
export const runPromisesInSeries = (ps: any) =>
  ps.reduce((p: any, next: any) => p.then(next), Promise.resolve())

/**
 * Delays the execution of an asynchronous function.
 * 
 * Delay executing part of an async function, by putting it to sleep, returning a Promise.
 * 
 * @example async function sleepyWork() {
 *            console.log('I\'m going to sleep for 1 second.');
 *            await sleep(1000);
 *            console.log('I woke up after 1 second.');
 *          }
 * @param  {number} ms
 */
export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))
