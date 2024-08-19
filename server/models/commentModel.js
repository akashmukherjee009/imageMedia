import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    likes: { type: Number, default: 0 }
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
