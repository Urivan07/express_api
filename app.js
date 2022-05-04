// usando un objeto de express
const express = require("express");
//app de express
const app = express();
// Indicamos que usaremos JSON
app.use(express.json());
// puerto en que vamos a ver nuestra app localhost:3000
const port = 3000;

// con esto inicializamos el app
app.listen(port, () => {
  console.log(`Example app listeting on port ${port}`);
});
