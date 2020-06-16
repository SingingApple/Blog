const Post = require("../model/Post");

const getPost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  res.render("post", { post });
};

const addPost = async (req, res, next) => {
  const newPost = {
    title: req.body.title,
    content: req.body.content,
  };
  try {
    const post = await Post.create(newPost);
    console.log(post);
    res.redirect("/posts");
  } catch (error) {
    return res.status(201).json({
      success: false,
      error: error,
    });
  }
};
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    console.log(posts);
    res.render("index", { posts });
  } catch (error) {
    return res.status(201).json({
      success: false,
      error: error,
    });
  }
};
const deletePost = async (req, res, next) => {
  console.log(req.params);
  try {
    const post = await Post.findById(req.params.id);
    const ress = await post.remove();
    res.redirect("/posts");
  } catch (error) {
    return res.send(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const content = req.body.content;
    const post = await Post.findById(id);
    console.log(post);
    if (post) {
      post.content = content;
      post.save();
      return res.status(200).json({
        success: true,
        data: post,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      error: error,
    });
  }
};

module.exports = {
  addPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
};
