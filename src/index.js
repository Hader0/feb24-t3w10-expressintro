const express = require("express");

// Make an instance of the Express system so we can configure it - E.g. routes, settings...
const app = express();

// GET localhost:3000/
app.get("/", (request, response) => {
    // response.send("<h3>Hello world!</h3>");
    response.json({
        message: "Hello world!"
    })
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`);
});