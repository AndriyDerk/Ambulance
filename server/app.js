require('dotenv').config()
const express = require('express'),
    morgan = require('morgan'),// TODO: витерти наступне: відповідає за логі
    mongoSanitize = require('express-mongo-sanitize');// TODO: витерти наступне: трішки захищає дб від ін'єкцій?

const PORT =process.env.PORT || 5000

const app = express()

app.use(morgan('dev'))// TODO: dev -> ?
app.use(mongoSanitize());

app.use('/', router)

const start = async () =>{
    try {
        app.listen(PORT, ()=> console.log(`Server started on PORT: ${PORT}`))
    }catch (e){
        console.log(e)
    }
}

start();