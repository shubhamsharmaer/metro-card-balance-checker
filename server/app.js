const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cardRoutes = require("./routes/cardRoutes");
require('dotenv').config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// RESTfull API
app.use('/api/card', cardRoutes);

// error handling
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
