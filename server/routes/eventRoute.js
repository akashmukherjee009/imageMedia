import express from 'express';
import { createEvent, getAllEvents, getOneEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();

// Create a new event
router.post('/', createEvent);

// Get all events
router.get('/get', getAllEvents);

// Get a single event by ID
router.get('/:id', getOneEvent);

// Update an event by ID
router.put('/update/:id', updateEvent);

// Delete an event by ID
router.delete('/:id', deleteEvent);

export default router;
