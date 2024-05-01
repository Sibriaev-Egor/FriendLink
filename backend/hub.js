require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');
const pool = require('./utils/databaseConnect');
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler) // обработка ошибок

const start = async () => {
    app.listen(PORT, function(){
        console.log(`Сервер ожидает подключения на порте ${PORT}...`);
    });
}
start().then();