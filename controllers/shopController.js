const path = require('path');

// Login Page Controller
exports.shop = (req, res) => {
    console.log('Login route accessed');
    res.sendFile(path.join(__dirname, '../views', 'shop.html'));
};
