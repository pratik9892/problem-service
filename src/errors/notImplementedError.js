const BaseError = require("./baseError.js")
const {StatusCodes} = require("http-status-codes")

class NotImplemented extends BaseError{
    constructor(methodName){
        super("NotImplemented Error",StatusCodes.NOT_IMPLEMENTED,`${methodName} not implemented`,{})
    }
}

module.exports = NotImplemented