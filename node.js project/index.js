const express = require("express");

const app = express();

app.get("/", (res, req) => {
    res.send("Hi There")
})


app.listen(3000);