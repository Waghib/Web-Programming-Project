const path = require('path');

// Home Page Controller
exports.index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
};