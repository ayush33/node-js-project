// 1 In Request File we can validate the require file
// 2 In Request File we can authorize user according to role (permission role wise)

const {body, param} = require('express-validator')
const Error = require('../constants/error-message')
/**
 * Validate the request
 * 
 * @param {*} method
 * @returns next
 */

const validate = (method) => {
    switch(method){
        case 'createTutorial':
            return[
                body('title')
                .exists()
                .withMessage(Error.Tutorial.NO_TITLE)
            ]
    }
}