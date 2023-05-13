const { validationResult } = require("express-validator/check");
const fs = require("fs");
const path = require("path");
const Post = require("../models/post");
const User = require("../models/user");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv").config();

cloudinary.config({
  cloud_name: `${process.env.cloud_name}`,
  api_key: `${process.env.api_key}`,
  api_secret: `${process.env.api_secret}`,
});

exports.getPosts = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perpage = 2;
  let totalItems;
  Post.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return Post.find()
        .skip((currentPage - 1) * perpage)
        .limit(perpage);
    })
    .then((posts) => {
      res.status(200).json({
        message: "Posts fetched succesfully",
        posts: posts,
        totalItems: totalItems,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.statusCode = 422;
    throw error;
  }
  if (!req.files) {
    const error = new Error("No image provided");
    error.statusCode = 422;
    throw error;
  }
  const image = req.files.image;
  console.log(image);
  cloudinary.uploader.upload(image.tempFilePath, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const imageUrl = result.url;
      const title = req.body.title;
      const content = req.body.content;
      let creator;
      let post;
      User.findById(req.userId)
        .then((user) => {
          creator = user;
          post = new Post({
            title: title,
            content: content,
            imageUrl: imageUrl,
            creatorName: user.name,
            creator: req.userId,
          });
          return post
            .save()
            .then((result) => {
              return User.findById(req.userId);
            })
            .then((user) => {
              creator = user;
              user.posts.push(post);
              return user.save();
            })
            .then((result) => {
              res.status(201).json({
                message: "Post created",
                post: post,
                creator: { _id: creator._id, name: creator.name },
              });
            });
        })
        .catch((err) => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        });
    }
  });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("No such Post");
        error.statusCode = 422;
        throw error;
      }
      res.status(200).json({ message: "Post Fetched", post: post });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updatePost = (req, res, next) => {
  const postId = req.params.postId;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.statusCode = 422;
    throw error;
    
  }
  const title = req.body.title;
  const content = req.body.content;
  let imageUrl = req.body.image;
  let image;
  if (req.files) {
    image = req.files.image;
    cloudinary.uploader
    .upload(image.tempFilePath, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const imageUrl = result.url;
        Post.findById(postId).then((post) => {
          if (!post) {
            const error = new Error("Post not found");
            error.statusCode = 422;
            throw error;
          }
          if (post.creator.toString() !== req.userId) {
            const error = new Error("Unauthorised user");
            error.statusCode = 403;
            throw error;
          }
          post.title = title;
          post.content = content;
          post.imageUrl = imageUrl;
         
          return post.save();
        }).then((result) => {
          
          res.status(200).json({ message: "Post Updated", post: result });
        }).catch((err) => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        });
      };
      
    })
  }
  else {
    
        Post.findById(postId).then((post) => {
          if (!post) {
            const error = new Error("Post not found");
            error.statusCode = 422;
            throw error;
          }
          if (post.creator.toString() !== req.userId) {
            const error = new Error("Unauthorised user");
            error.statusCode = 403;
            throw error;
          }

          post.title = title;
          post.content = content;
          post.imageUrl = imageUrl;
          return post.save();
        })
    .then((result) => {
      res.status(200).json({ message: "Post Updated", post: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
}};

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Post not found");
        error.statusCode = 422;
        throw error;
      }
      if (post.creator.toString() !== req.userId) {
        const error = new Error("Unauthorised user");
        error.statusCode = 403;
        throw error;
      }
      return Post.findByIdAndRemove(postId);
    })
    .then((result) => {
      return User.findById(req.userId);
    })
    .then((user) => {
      user.posts.pull(postId);
      return user.save();
    })
    .then(() => {
      res.status(200).json({ message: "Post Deleted" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

