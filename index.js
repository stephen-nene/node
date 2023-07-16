const express = require('express')
const app = express()

const cors = require('cors');

const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json(
        {message: "steves mini server"}
    )
})

app.get('/lian',(req,res)=>{
    res.json(
        {message_to_the_world: "steve loves (loved) lian"}
    )
})

app.listen( port,()=>{
    console.log(`server is listening on http://localhost:${port}`)
})