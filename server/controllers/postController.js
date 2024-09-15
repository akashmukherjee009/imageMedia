import Post from "../models/postModel.js";




export const createPost = async (req, res) => {
    try {
        console.log(req.files); // Log the uploaded files

        // Check if files were uploaded
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "No image files uploaded." });
        }

        // Map the uploaded file paths
        const imagePaths = req.files.map(file => `/uploads/${file.filename}`);

        const newPost = new Post({
            profile_id: req.body.profile_id,
            caption: req.body.caption,
            image: imagePaths, // Store the array of image paths
            likes: req.body.likes || 0,
            eventId: req.body.eventId
        });

        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllPost= async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOnePost= async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateOnePOst= async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. Delete a post by ID
export const deleteOnePost= async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



