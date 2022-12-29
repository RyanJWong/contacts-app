class HttpError extends Error {
    constructor(errorCode, message) {
        // Message property: this.message
        super(message);

        // Add error code property to error
        this.errorCode = errorCode;
    }
}

module.exports = HttpError;