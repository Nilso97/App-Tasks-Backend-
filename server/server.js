const express = require("express");
require("dotenv").config();

/**
 *
 * Servidor principal
 * @author: Nilso Junior
 *
 */

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/", require("../server/routes/routes"));

app.listen(PORT, () => console.log(`Server is running at Port: ${PORT}`));
