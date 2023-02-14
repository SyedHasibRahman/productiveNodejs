const express = require("express");
const usersController = require("../../controllers/users.controller");

const router = express.Router();

router
    .get("/random", usersController.randomUser)
    .get("/all", usersController.allUser)
    .post("/save", usersController.saveUser)
    .patch("/update/:id", usersController.updateUser)
    .patch("/bulk-update", usersController.bulkUpdateUsers)
    .delete("/delete/:id", usersController.deleteUser)


module.exports = router;