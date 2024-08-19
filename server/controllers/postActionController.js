import Post from "../models/postModel.js";
import Comment from "../models/commentModel.js";


// Increment likes
export const incrementLikes = async (req, res) => {
    
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Decrement likes
export const decrementLikes = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { likes: -1 } }, { new: true });
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new comment
export const createComment = async (req, res) => {

    try {
        const newComment = new Comment({
            content: req.body.content,
            post_id: req.params.id,  // Extract post_id from the URL
            likes: req.body.likes || 0,
        });

        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all comments for a specific post
export const getCommentsForPost = async (req, res) => {
    try {
        const comments = await Comment.find({ post_id: req.params.id });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a comment by ID
export const updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedComment) return res.status(404).json({ message: 'Comment not found' });
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a comment by ID
export const deleteComment = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) return res.status(404).json({ message: 'Comment not found' });
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
