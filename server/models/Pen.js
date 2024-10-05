const mongoose = require('mongoose');

// Pen Schema
const PenSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    html: {
        type: String,
        required: true,
    },
    css: {
        type: String,
        required: true,
    },
    js: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Pen = mongoose.model('Pen', PenSchema);

module.exports = Pen;
