const path = require('path');

// About Page Controller
exports.about = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'about.html'));
};
