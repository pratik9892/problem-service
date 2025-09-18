const {StatusCodes} = require("http-status-codes")
const NotImplemented = require("../errors/notImplementedError")

function pingProblemController(req,res){
    return res.json({
        message : "Ping Problem controller is up"
    })
}

function addProblem(req,res,next){
    // return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    //     message : "not implemented"
    // })

    try {
        throw new NotImplemented("addProblem")
    } catch (error) {
        next(error)
    }
}

function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "not implemented"
    })
}

function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "not implemented"
    })
}

function updateProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "not implemented"
    })
}

function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "not implemented"
    })
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblems,
    deleteProblem,
    pingProblemController
}