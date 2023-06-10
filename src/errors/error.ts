export class BaseError extends Error {
    public httpCode: number;
    constructor(name: string, httpCode: number, message: string) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.httpCode = httpCode;
        this.message = message;

        Error.captureStackTrace(this);
    }
}