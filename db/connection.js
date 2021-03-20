//grab environment variables
require(`dotenv`).config()

//IMPORT MONGOOSE

const mongoose = require(`mongoose`)

//IMPORT LOGGER FOR COLORFUL LOGS

const { log } = require(`mercedlogger`)

const MONGO_URI = process.env.MONGODBURI || `mongodb://
localhost:27017//defaultdb`;
console.log(MONGO_URI)


//MONGOOSE CONFIGURATION OBJECT TO AVOID WARNINGS

const config = {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
    useCreateIndex: true,
}

//MAKING THE DATABASE CONNECTION

mongoose.connect(MONGO_URI, config)


//HANDLING CONNECTION EVENTS

mongoose.connection
//event for when the connection opens
.on(`open`, () => log.green(`STATUS`, `Connected to Mongo!!`))

//event when connection closes
.on(`close`, () => log.green(`STATUS`, `Disconnected to Mongo!!`))

//Event for Connection Errors

.on(`error`, error => log.red(`ERROR`, error))

module.exports = mongoose