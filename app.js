require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const mainRouter = require("./routes/main");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

app.use(function (req, res, next) {
  // method path - ip
  let logger = 'Method: '+ req.method + ' | ' +'Path: '+ req.path + ' | ' + 'Ip: ' + req.ip;
  console.log(`👽👽👽️ Request received --> ${logger}`);
  next();
});

// rewrite routes
app.use("/api/v1", mainRouter);

app.get("/test", (req, res) => {
  res.send(`<h1>jwt-basics</h1>`);
});

//! OJO donde poner estos middlewares si los pones antes de las rutas no funcionan las rutas
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
