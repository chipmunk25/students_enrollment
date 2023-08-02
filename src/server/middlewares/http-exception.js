/* eslint-disable no-undef */
class CustomError extends Error {
    constructor(status, ...args) {
        super(...args);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
        this.status = status;
        if (status === undefined) {
            this.status = 500;
        }
        switch (status) {
            case 400:
                this.status = 400;
                this.name = 'Bad request.';
                this.message = 'Bad request.';
                break;
            case 401:
                this.status = 401;
                this.name = 'Unauthorized.';
                this.message = 'Unauthorized.';
                break;
            case 404:
                this.status = 404;
                this.name = 'Not Found';
                this.message = this.message || 'Resource not found.';
                break;
            case 409:
                this.status = 409;
                this.name = 'Conflict';
                this.message = this.message || 'Please check your data.';
                break;
            case 422:
                this.status = 422;
                this.name = 'Validation error';
                this.message = this.message || 'Please check your data.';
                break;
            default:
                this.status = 500;
                this.name = 'Internal server error';
                this.message = 'Internal server error.';
                break;
        }
    }
}

module.exports = CustomError;
