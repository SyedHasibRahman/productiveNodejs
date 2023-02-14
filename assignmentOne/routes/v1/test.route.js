const express = require("express");
const testControllers = require("../../controllers/test.controller");
const viewCount = require("../../middleware/viewCount");
const { limiter } = require("../../utils/apiCallLimiter");

const router = express.Router()

/**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */

router
    .get("/", testControllers.getTest)
    .get("/:id", viewCount, limiter, testControllers.getTestBYID)

    /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
    .post("/", testControllers.saveTest)
    .patch("/:id", testControllers.updateDataByPatch)
    .put("/:id", testControllers.updateCreateByPut)
    .delete("/:id", testControllers.deleteByDelete)

module.exports = router;