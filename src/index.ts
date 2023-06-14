import 'dotenv/config';

import http from 'http';
import helmet from 'helmet';
import express, {Application} from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import apicache from 'apicache';
import { connectToDB } from "./database";
import morgan from "morgan";
import router from "./routes/v1";

//set up express
const app: Application = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const cache = apicache.middleware;

//set up middleware
app.use(cache('1 day'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(helmet());
app.use(
    mongoSanitize({
        replaceWith: '_santized_',
    })
);
app.use(morgan('dev'));

//set up routes
app.use('/api/v1', router);

// catch all errors that are not handled
app.use((err, req, res, next) => {
    if (err.statusCode !== 401) {
        console.log(err);
        res.status(500).send({ message: 'Internal Server Error', code: 500 });
        next();
        return;
    }
    res.status(err.statusCode || 500).send({
        message: err.message,
        code: err.statusCode || 500,
    });
    next();
});

const server = http.createServer(app);

//connect to database and start server
connectToDB().then(() => {
    server.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
}).catch((err) => {
    console.log(err);
    process.exit(1);
});
