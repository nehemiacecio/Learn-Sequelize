const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(bodyParser.urlencoded({extended:true}));

// app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// const db = require("./models");

// db.sequelize.sync();

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

require("./routes/UsersRoute")(app);

app.all('*', (req, res) => {
    return res.json({message: 'Public Service - Wrong Endpoint'})
});

// set port, listen for requests
// const PORT = process.env.PORT || 8080;
const PORT = 4011;
app.listen(PORT, () => {
    console.log(`${PORT} - User Service`);
});