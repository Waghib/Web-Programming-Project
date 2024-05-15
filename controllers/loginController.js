const path = require('path');

// Login Page Controller
exports.login = (req, res) => {
    console.log('Login route accessed');
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
};
