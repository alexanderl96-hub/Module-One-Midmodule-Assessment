/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val, i ) {
  return( typeof i === 'number' && val === 'number')
  
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val, i) {
  if ( i !== val){
    return(true)
  }
  
} 


module.exports = {
  isNumber,
  isTruthy
}
