const BaseError = require("../errors/baseError")
const NotFound = require("../errors/notFound")
const {Problem} = require("../models")

class ProblemRepository{
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title : problemData.title,
                description : problemData.description,
                testCases : problemData.testCases || []
            })

            return problem
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getAllProblems(){
        try {
            const problem = await Problem.find({})
            return problem
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getProblem(id){
        try {
            console.log(NotFound instanceof BaseError)
            const problem = await Problem.findById(id)
            if(!problem){
                throw new NotFound("Problem",id)
            }
            return problem
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

module.exports = ProblemRepository