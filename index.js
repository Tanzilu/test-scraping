const express = require("express")
const bodyParser = require("body-parser");
const findRouter = require("./api/routes/find");
const cors = require("cors")

require("./config/db")

const app = express();

const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api/v1', findRouter)


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})