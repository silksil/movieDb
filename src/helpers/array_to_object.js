/*
 * Takes in an array of objects and a key property
 * Transforms it into an object with objects
 * Assigns a key to every object based on the provided key property
*/
export const arrayToObject = (array, keyField) =>
   array.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {})
