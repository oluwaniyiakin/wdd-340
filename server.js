/* ******************************************
 * This is the application server
 * ******************************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts"); // Require express-ejs-layouts

const app = express();

/* ******************************************
 * View Engine and Templates
 * ***************************************** */
app.set("view engine", "ejs"); // Set EJS as the view engine
app.use(expressLayouts); // Use express-ejs-layouts
app.set("layout", "./layouts/layout"); // Specify layout location

/* ******************************************
 * Default GET route
 * ***************************************** */
app.get("/", (req, res) => {
  res.send("Welcome home!");
});

/* ******************************************
 * Server host name and port
 * ***************************************** */
const HOST = "localhost";
const PORT = 3000;

/* ***********************
 * Log statement to confirm server operation
 * *********************** */
app.listen(PORT, () => {
  console.log(`trial app listening on ${HOST}:${PORT}`);
});
