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

async function getProblem(req,res,next){
   try {
    const problem = await problemService.getProblem(req.params.id)
    return res.status(StatusCodes.OK).json({
        success : true,
        message : "Fetched a problem successfully",
        error : {},
        data : problem
    })
   } catch(error) {
        next(error);
   }
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

async function updateProblems(req,res,next){
    try {
        const updatedProblem = await problemService.updateProblem(req.params.id,req.body)
      

        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Problem updated successfully",
            error : {},
            data : updatedProblem
        })

    } catch (error) {
        next(error)
    }
}

async function deleteProblem(req,res,next){
    try {
        const deleteProblem = await problemService.deleteProblem(req.params.id)
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Successfully deleted the problem",
            data : deleteProblem
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addProblem,
    getProblem,
    getAllProblems,
    updateProblems,
    deleteProblem,
    pingProblemController
}