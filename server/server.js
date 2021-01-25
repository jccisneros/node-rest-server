const express = require("express");
const bodyParser = require('body-parser');
require('./config/config');

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Express Server");
});

app.get("/user", (req, res) => {
  res.json("get user");
});

app.post("/user", (req, res) => {
  let body = req.body;
  if (body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      messaje: 'The name is required'
    })
  } else {
    res.json({
      user: body,
    });
  }
});

app.put("/user/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    id
  });
});

app.delete("/user/:id", (req, res) => {
  res.json("delete user");
});

app.listen(process.env.PORT, () => {
  console.log(`Express run in PORT: ${process.env.PORT}`);
});
