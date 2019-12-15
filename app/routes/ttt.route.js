module.exports = (app) => {
    const router = require('../controllers/ttt.controller.js');
    // Call the method to start counting occurences.
    app.get('/findOccurences/', router.findOccurences);
}