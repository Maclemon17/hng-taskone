const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send(
        {
            "slackUsername": "Maclemon",
            "backend": true,
            "age": 23,
            "bio": "I am Elijah Tosin Adegoke, a student and software deveoper from Oyo state, Nigeria. Born december 17."
        }
    )
})


app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`)
})
