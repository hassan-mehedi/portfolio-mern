const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const config = require("./config/config");

const blogRoute = require("./routes/api/blog.routes");

// connect to the database
mongoose
    .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));

// Start the server
app.listen(config.PORT, () => console.log(`Listening on ${config.PORT}`));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/blogs", blogRoute);
