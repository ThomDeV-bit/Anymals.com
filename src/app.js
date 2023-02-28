const express=require('express')

const app= express()

app.use(express.json())

app.use('/api',require('./routes/api'))


app.listen(4000,()=>{console.log('server running')}) 