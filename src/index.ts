import express, {Application} from 'express';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import apicache from 'apicache';
import createError from 'http-errors';

//set up express
const app: Application = express();
const port: number = 3000;
const cache = apicache.middleware;

//set up middleware
app.use(cache('1 day'));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//set up routes


// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});
app.use((err: any, req: any, res: any) => {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});