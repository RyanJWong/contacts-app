const ObjectId = require('mongoose').Types.ObjectId;

const isObjectIdValid = (id) => {
    let valid = false;
    if (ObjectId.isValid(id)) {
        // Check for false positive
        if ((String)(new ObjectId(id)) == id) {
            valid = true;
        }
    }
    return valid;
}

module.exports = { isObjectIdValid }