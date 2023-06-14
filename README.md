# F1 racing result API

## Description

If you are interested in F1 racing results, you might want to check out this open-source API that provides historical
and live data for the Formula One series.  
The API is based on the data from [formular1.com](https://www.formula1.com/en/results.html/2023/races.html) and other
sources, and it allows you to query various aspects of the races, such as drivers, constructors, circuits, standings,
lap times, pit stops and more. The API is free for non-commercial use and supports XML, JSON and JSONP formats.  
You can find more information and documentation on how to use the API down below.

**Time spent on this project: `~ 13 hours`**

## API documentation

The base URL of the API is `https://f1-racing-result-api.herokuapp.com/api/v1/`.  
The API documentation is available at [link](https://documenter.getpostman.com/view/23547388/2s93sf2WkT)

## Project structure

The project is structured in the following way:

```
.
├── src/
│   ├── components/
│   │   └── v1
│   ├── database/
│   │   ├── models
│   │   └── index.ts
│   ├── errors
│   ├── routes/
│   │   └── v1
│   ├── util
│   └── index.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

- `src/components` - contains the components of the API, each component is a separate folder with its own routes,
  controllers and services.
- `src/database` - contains the database models and the database connection
- `src/errors` - contains the custom error classes
- `src/routes` - contains the routes of the API
- `src/util` - contains utility functions
- `src/index.ts` - the entry point of the application

## How to run the project

### Prerequisites

- Node.js v14.15.4
- npm v6.14.10
- MongoDB v4.4.3

### Steps

To run the project in **_development mode_**, follow these steps:

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `cp .env.example .env` to create the `.env` file and fill in the environment variables.
4. Run `npm run dev` to start the development server
5. The API will be available at `http://localhost:3000`

To run the project in **_production mode_**, follow these steps:

1. Clone the repository
2. Run `npm install` to install the dependencies.
3. Run `cp .env.example .env` to create the `.env` file and fill in the environment variables.
4. Run `npm run start` to build and start the project in production mode.
5. The API will be available at `http://localhost:3000`