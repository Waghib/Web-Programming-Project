const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');
const furnitureController = require('../controllers/furnitureController');
const loginController = require('../controllers/loginController');
const shopController = require('../controllers/shopController');


// Define routes and corresponding controllers
router.get('/', homeController.index);
router.get('/about', aboutController.about);
router.get('/contact', contactController.contact);
router.get('/furniture', furnitureController.furniture);
router.get('/login', loginController.login);
router.get('/shop', shopController.shop);

module.exports = router;
