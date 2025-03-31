import express from 'express';
import { deleteUser, followUser, unFollowUser, getUser, updateUser } from '../Controllers/UserController.js';
const router = express.Router(); // Create a new router instance

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unFollowUser)

export default router;