const express = require("express");
const { get } = require("./pokemonController");
const router = express.Router();

// Get all users but only if the admin is the one making this request
// localhost:3000/users/
router.get(
    "/",
    checkifAdmin, // Middleware to check auth
    getUsersFromDatabase, // Middleware to query the database
    (request, response) => {
        response.json({
            users: request.userData // Use the middleware results in the endpoint response
        });
    }
);

module.exports = router;