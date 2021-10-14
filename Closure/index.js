/**
 * A closure is a combination on function bundled together
 * In other words, a closure gives you access to an outer function scope
 * Closure is used to make methods and variables private
 */

let globalVar = 12
function x() {
    var variable = 10
    function y() {
        console.log(globalVar, variable);
        return variable
    }
    return y
}

var z = x()
z()

