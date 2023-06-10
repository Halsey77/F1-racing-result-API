import {HttpCodes} from "./api";

export class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: HttpCodes;
    public readonly message: string;

    constructor(name: string, httpCode: number, message: string) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.httpCode = httpCode;
        this.message = message;

        Error.captureStackTrace(this);
    }
}