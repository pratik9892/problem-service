// const BaseError = require("./baseError.js")
// const {StatusCodes} = require("http-status-codes")

// class NotFound extends BaseError{
//     constructor(resourceName,resourceValue){
//         super("Not Found",StatusCodes.NOT_FOUND,`The resource : ${resourceName} with value : ${resourceValue} not found!!!`,{
//             resourceName,
//             resourceValue
//         })
//     }
// }


const BaseError = require("./baseError.js")
const {StatusCodes} = require("http-status-codes")

class NotFound extends BaseError { // Correctly extends BaseError
    constructor(resourceName, resourceValue){
        super("NotFound Error", StatusCodes.NOT_FOUND, `Resource not Found: ${resourceName} with value: ${resourceValue}`, {
            resourceName,
            resourceValue
        })
    }
}

console.log('NotFound BaseError prototype:', Object.getPrototypeOf(NotFound));


module.exports = NotFound

