const path = require('path');

// Furniture Page Controller
exports.furniture = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'furniture.html'));
};
