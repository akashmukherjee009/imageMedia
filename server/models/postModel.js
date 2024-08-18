import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    profile_id: { type: String, required: true },
    caption: { type: String, required: true },
    image: { type: String, required: true },
    likes: { type: Number, default: 0 }
});

const Post = mongoose.model('Post', postSchema);

export default Post;