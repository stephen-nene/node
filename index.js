const express = require('express')
const app = express()

const cors = require('cors');

const port = 3000;
const host = "localhost" ;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json(
        {message: "steves mini server"}
    )
})

app.listen(host, port,()=>{
    console.log(`server is listening on http://${host}:${port}`)
})