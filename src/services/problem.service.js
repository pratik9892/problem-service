const ProblemRepository = require("../repositories")
const { markdownSantizer } = require("../utils")

class ProblemService{
    constructor(ProblemRepository){
        this.ProblemRepository = ProblemRepository
    }

    async createProblem(problemData){
       try {
             //santize the markdown for problem description
        problemData.description = markdownSantizer(problemData.description)

        const problem = await this.ProblemRepository.createProblem(problemData)

        return problem;
       } catch (error) {
            console.log(error)
            throw error;
       }
    }

    async getAllProblems(){
        try {
            const problems = await this.ProblemRepository.getAllProblems()
            return problems
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getProblem(id){
            const problem = await this.ProblemRepository.getProblem(id)
            return problem           
    }

    async deleteProblem(id){
        const deletedProblem = await this.ProblemRepository.deleteProblem(id)
        return deletedProblem
    }

    async updateProblem(id,problemData){
        const updatedProblem = await this.ProblemRepository.updateProblem(id,problemData)
        return updatedProblem
    }
}

module.exports = ProblemService