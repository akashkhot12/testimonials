const express = require('express');
const { getTestimonial, postTestimonial } = require('./controller');
const router = express.Router();


router.get('/',getTestimonial);

router.post('/addtestimonial',postTestimonial);


module.exports = router;
