import express from "express";

const app = express()
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        res.send(`Express server running on Port: ${PORT}`)   
    } 
    catch(err) {
        res.status(500).send(err)
    }
})

app.listen(PORT, () => {
    console.log(`Your Server is running on Port: ${PORT}`);
})