const express = require("express")

const {problemController} = require("../../controllers/index.js")

const problemRouter = express.Router()

problemRouter.get("/ping" , problemController.pingProblemController)
problemRouter.get("/:id" , problemController.getProblem)
problemRouter.get("/" , problemController.getAllProblems)
problemRouter.post("/" , problemController.addProblem);
problemRouter.delete("/:id" , problemController.deleteProblem)
problemRouter.patch("/:id",problemController.updateProblems)

module.exports = problemRouter;