import express from 'express';
import { decrementLikes, incrementLikes, createComment, getCommentsForPost, updateComment, deleteComment } from '../controllers/postActionController.js';

const router = express.Router();


// Likes
router.patch('/:id/like', incrementLikes);
router.patch('/:id/unlike', decrementLikes);

//Comments
router.post('/:id', createComment);  // Create a comment
router.get('/:id', getCommentsForPost);  // Get comments for a specific post
router.put('/:id', updateComment);  // Update a comment by ID
router.delete('/:id', deleteComment);  // Delete a comment by ID



export default router;