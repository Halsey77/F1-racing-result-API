const response = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (err) {
        const { httpCode, message } = err;
        const code = httpCode || 500;
        const errorMessage = !httpCode ? 'Internal Server Error' : message;

        console.log(err);
        res.status(code).send({ errorMessage, code });
    }
};

export default response;