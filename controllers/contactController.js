const path = require('path');

// Contact Page Controller
exports.contact = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'contact.html'));
};
