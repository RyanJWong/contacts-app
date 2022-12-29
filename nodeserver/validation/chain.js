const { check, oneOf } = require('express-validator');


exports.validate = [
    // Validation chain: check()..trim().not().isEmpty().withMessage()
    oneOf([
        check('firstName')
        .trim()
        .not()
        .isEmpty()
        .withMessage("One of 'First Name' or 'Last Name' is required."),

        check('lastName')
        .trim()
        .not()
        .isEmpty()
        .withMessage("One of 'First Name' or 'Last Name' is required.")
    ]),

    check('middleName')
    .trim()
    .optional(),

    // Validate JSOn array using * wildcard
    check('phones.*.countryCode')
    .trim()
    .isLength({ min: 2, max: 2 })
    .withMessage("Country Code must be less than or equal to 2 characters"),

    check('phones.*.type')
    .trim()
    .isIn(['Business', 'Home', 'Mobile', ' Other', 'Personal', 'Work'])
    .withMessage("Phone type is required and must be one of 'Business', 'Home', 'Mobile', ' Other', 'Personal', or 'Work'"),

    check('phones.*.phone')
    .trim() 
    .isNumeric()
    .isLength({ min: 8, max: 15 })
    .withMessage('A valid phone number is required: 10 (US Canada others) or 8-15 digits (international), no other chracters'),

    check('emails.*.type')
    .trim()
    .isIn(['Business', 'Home', 'Mobile', ' Other', 'Personal', 'Work'])
    .withMessage("Email type is required and must be one of 'Business', 'Home', 'Mobile', ' Other', 'Personal', or 'Work'"),

    check('streetAddress')
    .trim()
    .optional(),

    check('city')
    .trim()
    .optional(),

    check('state')
    .trim()
    .isLength({min: 2, max: 2})
    .optional()
    .withMessage('State must be 2 characters'),

    check('zipcode')
    .trim()
    .optional(),

    check('countryCode')
    .trim()
    .isLength({min: 1, max: 2})
    .optional()
    .withMessage('Country Code must be less than or equal to 2 characters'),

    check('image')
    .trim()
    .optional(),
];


