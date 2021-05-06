# test-scraping
Test scraping tokopedia created by Aulia Tanzilu Akmal using ExpressJS and MongoDB as Database. 

## Requirement
- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [POSTMAN](https://www.postman.com/)
- [MongoDb Atlas](https://www.mongodb.com/cloud/atlas)

## Project Setup
```sh
# clone it
git clone https://github.com/Tanzilu/test-scraping.git

cd test-scraping

# Install dependencies
npm install

# Install nodemon
npm install -g nodemon

# Then setting your database in folder config/db.js
# change the uri with your mongodb connection
var uri = "mongodb+srv://<username>:<password>@cluster0.cetkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

```

## Project Run
```sh
# Run the project
npm run dev

```

## List Endpoints

1. API to scraping with query

```bash
/api/v1/find

```

example input 

```bash
{
    "query" : "Catur",
}

```

