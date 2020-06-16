const express = require("express");
const router = express.Router();
const {
  getPost,
  addPost,
  getPosts,
  deletePost,
  updatePost,
} = require("../controller/PostController");
router.route("/").get(getPosts);
router.route("/").post(addPost);
router.route("/:id").get(getPost);
router.route("/delete/:id").get(deletePost);
router.route("/:id").patch(updatePost);
module.exports = router;
