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
        {
            message_to_the_world: "steve loves (loved) lian 😂😂😂😂",
            condition: "only if vise-versa is true 😌😌😢😢😢😢"
        }
    )
})

app.get("/steve",(req,res)=>{
    const htmlContent = `
    <html>
    <head>
      <title>Steve's Love Message</title>
    </head>
    <body>
      <h1>Steve loves (loved) Lian 😂😂😂😂</h1>
      <h2>Only if she does it back 😌😌😢😢😢😢</h2>
    </body>
  </html>
    `;
    res.send(htmlContent)
})

app.listen( port,()=>{
    console.log(`server is listening on http://localhost:${port}`)
})