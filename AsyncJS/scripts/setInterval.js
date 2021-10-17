/**
 * setInterval(() => {
 *      code gets executed after every threshold
 * }, threshold)
 */

 var myVarInterval;

 var startInterval = () => {
    myVarInterval = setInterval(() => {
         console.log("Logged after 3s")
     }, 3000)
 }
 
 var stopInterval = () => {
     clearInterval(myVarInterval)
 }