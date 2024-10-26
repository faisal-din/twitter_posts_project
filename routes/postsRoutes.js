const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Routes for posts
router.get('/', postsController.getAllPosts);
router.get('/new', postsController.getNewPostForm);
router.post('/', postsController.createPost);
router.get('/:id', postsController.getPostById);
router.get('/:id/edit', postsController.editPost); // Use the same controller for simplicity
router.patch('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router;
