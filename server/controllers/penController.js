const Pen = require('../models/Pen');

// Get all pens
exports.getPens = async (req, res) => {
    try {
        const pens = await Pen.find().populate('user', 'username');
        res.status(200).json(pens);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new pen
exports.createPen = async (req, res) => {
    const { title, description, html, css, js } = req.body;

    try {
        const newPen = new Pen({
            title,
            description,
            html,
            css,
            js,
            user: req.user.userId,
        });

        await newPen.save();
        res.status(201).json(newPen);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
