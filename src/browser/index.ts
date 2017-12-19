/**
 * Returns true if the bottom of the page is visible, false otherwise.
 * 
 * Use scrollY, scrollHeight and clientHeight to determine if the bottom of the page 
 * is visible.
 * 
 * @example bottomVisible() -> true
 */
export const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight)

/**
 * Returns the current URL.
 * 
 * Use window.location.href to get current URL.
 * 
 * @example currentUrl() -> 'https://google.com'
 */
export const currentURL = () => window.location.href

/**
 * Returns true if the element specified is visible in the viewport, false otherwise.
 * 
 * Use Element.getBoundingClientRect() and the window.inner(Width|Height) values to 
 * determine if a given element is visible in the viewport. Omit the second argument 
 * to determine if the element is entirely visible, or specify true to determine if 
 * it is partially visible.
 * 
 * @example 100x100 viewport and a 10x10px element at position {top: -1, left: 0, 
 *          bottom: 9, right: 10}
 *          elementIsVisibleInViewport(el) -> false (not fully visible) 
 *          elementIsVisibleInViewport(el, true) -> true (partially visible)
 * @param  {Element} el
 * @param  {} partiallyVisible=false
 */
export const elementIsVisibleInViewport = (
  el: Element,
  partiallyVisible = false
) => {
  const { top, left, bottom, right } = el.getBoundingClientRect()
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

/**
 * Returns the scroll position of the current page.
 * 
 * Use pageXOffset and pageYOffset if they are defined, otherwise scrollLeft and 
 * scrollTop. You can omit el to use a default value of window.
 * 
 * @example getScrollPosition() -> {x: 0, y: 200}
 * @param  {} el=window
 */
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

/**
 * Returns an object containing the parameters of the current URL.
 * 
 * Use match() with an appropriate regular expression to get all key-value pairs, 
 * Array.reduce() to map and combine them into a single object. Pass location.search 
 * as the argument to apply to the current url.
 * 
 * @example getURLParameters('http://url.com/page?name=Adam&surname=Smith') -> 
 *          {name: 'Adam', surname: 'Smith'}
 * @param  {string} url
 */
export const getURLParameters = (url: string) =>
  url
    .match(/([^?=&]+)(=([^&]*))/g)
    .reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
      ),
      {}
    )

/**
 * Redirects to a specified URL.
 * 
 * Use window.location.href or window.location.replace() to redirect to url. Pass a 
 * second argument to simulate a link click (true - default) or an HTTP redirect 
 * (false).
 * 
 * @example redirect('https://google.com')
 * @param  {string} url
 * @param  {} asLink=true
 */
export const redirect = (url: string, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url)

/**
 * Smooth-scrolls to the top of the page.
 * 
 * Get distance from top using document.documentElement.scrollTop or 
 * document.body.scrollTop. Scroll by a fraction of the distance from top. Use 
 * window.requestAnimationFrame() to animate the scrolling.
 * 
 * @example scrollToTop()
 */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}
