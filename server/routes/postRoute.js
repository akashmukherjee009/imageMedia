import express from 'express';
import { getAllPost, createPost, getOnePost, updateOnePOst, deleteOnePost } from '../controllers/postController.js';


const router = express.Router();


router.get('/',getAllPost)
router.post('/',createPost)
router.get('/posts/:id', getOnePost)
router.put('/posts/:id', updateOnePOst)
router.delete('/posts/:id', deleteOnePost)

export default router