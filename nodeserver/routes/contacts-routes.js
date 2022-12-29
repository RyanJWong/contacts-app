// Use object de-structuring
const { Router } = require('express');
const { route } = require('express/lib/application');
const contactsController = require('../controllers/contacts-controller');
const { check, oneOf, checkSchema } = require('express-validator');
const { chain } = require('../validation/chain');
const cors  = require('cors');
// Buid a REST API with Node.js and Express.js
// https://restfulapi.net/
// https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/
// https://www.edureka.co/blog/what-is-rest-api/
// HTTP response status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// 7 HTTP methods every web developer should know and how to test them
// https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them

const router = Router();

// REST API endpoints (aka routes)
// The order of the routes matter
// From server.js app.use(...)
// '/' is a suffix to the prefix specified in server.js app.use()
// Route using dynamic params (start with : and seperate with &)
router.get(['/:cid', '/'], cors(), 
    [
        check('state')
            .trim()
            .isLength({min: 1, max: 2})
            .optional()
            .withMessage('State must be less than or equal to 2 characters'),
        check('countryCode')
            .trim()
            .not()
            .isLength({min: 1, max: 2})
            .optional()
            .withMessage('Country Code must be less than or equal to 2 characters'),
        check('phones.*.countryCode')
            .trim()
            .isLength(2)
            .withMessage("Country Code must be less than or equal to 2 characters"),
    ].filter(x=> !!x), 
    contactsController.getContacts
);

router.post('/', cors(), chain.validate, contactsController.create);

router.patch(
    ['/:id', '/'], cors(),
    [
        // Validate JSOn array using * wildcard
        check('phones.*.countryCode')
        .exists()
        .trim()
        .isLength(2)
        .withMessage("Country Code is required and must be 2 chracters"),

        check('phones.*.type')
        .exists()
        .trim()
        .isIn(['Business', 'Home', 'Mobile', ' Other', 'Personal', 'Work'])
        .withMessage("Phone type is required and must be one of 'Business', 'Home', 'Mobile', ' Other', 'Personal', or 'Work'"),

        check('phones.*.phone')
        .exists()
        .trim()
        .withMessage('A valid phone number is required: 10 (US Canada others) or 8-15 digits (international), no other chracters')
        .bail()
        .isNumeric()
        .withMessage('A valid phone number is required: 10 (US Canada others) or 8-15 digits (international), no other chracters')
        .bail()
        .isLength({ min: 8, max: 15 })
        .withMessage('A valid phone number is required: 10 (US Canada others) or 8-15 digits (international), no other chracters'),

    ],
    contactsController.update
);

module.exports = router;