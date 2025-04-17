const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/computers', controllers.createComputers);
router.get('/computers', controllers.getAllComputers);

module.exports = router;
