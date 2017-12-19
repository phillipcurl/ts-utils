/**
 * Returns the difference (in days) between two dates.
 * 
 * Calculate the difference (in days) between to Date objects.
 * 
 * @example getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")) -> 9
 * @param  {Date} dateInitial
 * @param  {Date} dateFinal
 */
export const getDaysDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24)

/**
 * Converts a JSON object to a date.
 * 
 * Use Date(), to convert dates in JSON format to readable format (dd/mm/yyyy).
 * 
 * @example JSONToDate(/Date(1489525200000)/) -> "14/3/2017"
 * @param  {any[]} arr
 */
export const JSONToDate = (arr: any[]) => {
  const dt = new Date(parseInt(arr.toString().substr(6)))
  return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`
}

/**
 * Converts a date from American format to English format.
 * 
 * Use Date.toISOString(), split('T') and replace() to convert a date from American 
 * format to English format. Throws an error if the passed time cannot be converted 
 * to a date.
 * 
 * @example toEnglishDate('09/21/2010') -> '21/09/2010'
 * @param  {string} time
 */
export const toEnglishDate = (time: string) => {
  try {
    return new Date(time)
      .toISOString()
      .split('T')[0]
      .replace(/-/g, '/')
  } catch (e) {
    return
  }
}
