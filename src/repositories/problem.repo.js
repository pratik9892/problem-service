const BaseError = require("../errors/baseError")
const InternalServerError = require("../errors/internalServerError")
const NotFound = require("../errors/notFound")
const {Problem} = require("../models")
const { findById, findByIdAndDelete, findByIdAndUpdate } = require("../models/problem.model")

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

    async deleteProblem(id){
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id)
            if(!deletedProblem){
                throw new NotFound("Problem",id)
            }          
            return deletedProblem
        } catch (error) {
            throw error
        }
    }

    async updateProblem(id,problemData){
        try {
            const updatedProblem = await Problem.findByIdAndUpdate(id,{
                title : problemData.title,
                description : problemData.description
            }) 

            if(!updatedProblem){
                throw new NotFound("Problem",id)
            }

            return updatedProblem
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProblemRepository