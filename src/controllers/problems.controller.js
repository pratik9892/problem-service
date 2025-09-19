const {StatusCodes} = require("http-status-codes")
const {ProblemService} = require("../services")
const {ProblemRepository} = require("../repositories")
const errorHandler = require("../utils/errorHandler")

const problemService = new ProblemService(new ProblemRepository())

function pingProblemController(req,res){
    return res.json({
        message : "Ping Problem controller is up"
    })
}

async function addProblem(req,res,next){
    try {
        console.log("incoming req body" , req.body)
        const newProblem = await problemService.createProblem(req.body)

        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : "New Problem Created",
            error : {},
            data : newProblem
        })
    } catch (error) {
        next(error)
    }
}

async function getProblem(req,res){
   
}

async function getAllProblems(req,res){
    try {
        const problems = await problemService.getAllProblems()

        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Fetched all problems",
            error : {},
            data : problems
        })
   } catch (error) {
    next(error)
   }
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
    getAllProblems,
    updateProblems,
    deleteProblem,
    pingProblemController
}