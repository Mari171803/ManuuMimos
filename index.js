import express from 'express'
import exphbs from 'express-handlebars'
import cors from 'cors'

const app = express()

app.get('/', (req,res)=>{
    res.send('Tá okay')
})

app.listen(3000, ()=>{
    'http://localhost:3000'
})