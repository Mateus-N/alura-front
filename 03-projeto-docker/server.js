const express = require('express');
const app = express();

app.use(express.static("."));

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

port = process.env.PORT ?? 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
