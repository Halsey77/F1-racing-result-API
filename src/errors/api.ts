import { BaseError } from "./error";

export const HttpCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401,
    TOO_MANY_REQUESTS: 429,
    UNPROCESSABLE_ENTITY: 422,
};
export class APIError extends BaseError {
    constructor(httpCode: number = HttpCodes.INTERNAL_SERVER, message: string = 'Internal Server Error', name: string = 'API ERROR') {
        super(name, httpCode, message);
    }
}