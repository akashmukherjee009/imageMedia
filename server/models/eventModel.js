import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    caption: { type: String, required: true },
    description: { type: String, required: true },
    date: {type:Date, required: true},
    interested: { type: Number, default: 0 }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;