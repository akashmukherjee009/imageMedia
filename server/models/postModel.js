import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    profile_id: { type: String, required: true },
    caption: { type: String, required: false },
    image: { type: [String], required: true },
    likes: { type: Number, default: 0 },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: false },
});
const Post = mongoose.model('Post', postSchema);

export default Post;