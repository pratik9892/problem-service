class BaseError extends Error{
    constructor(name,statuscode,description,details){
        super(description)
        this.name = name,
        this.statuscode = statuscode,
        this.details = details
        Error.captureStackTrace(this)
    }
}

module.exports = BaseError