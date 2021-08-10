const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/repos", async (req, res) => {
    const { q } = req.query;

    const apiResponse = await axios.get(
        `https://api.github.com/search/repositories?q=${q}`
    );

    return res.json(apiResponse.data.items);
});

app.listen(process.env.PORT || 3333);
