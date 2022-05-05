// Usando un objeto de express
const express = require("express");
// App de express
const app = express();
// Indicamos que usaremos JSON
app.use(express.json());
// Puerto en que vamos a ver nuestra app localhost:3000
const port = 3000;

// Esto es un endpoint
// Routes
// Metodos HTTP: GET, POST, PUT, DELETE
app.get("/v1/explorers", (req, res) => {
  console.log(`GET Explorers V1 API ${new Date()}`);
  const explorer1 = { id: 1, name: "Explorer1" };
  const explorer2 = { id: 2, name: "Explorer2" };
  const explorers = [explorer1, explorer2];
  // HTTP code status: 200
  res.status(200).json(explorers);
});

app.get("/v1/explorers/:id", (req, res) => {
  console.log(`GET BY ID Explorers V1 API ${new Date()}`);
  const explorer1 = { id: 1, name: "Explorer1" };
  // HTTP code status: 200
  res.status(200).json(explorer1);
});

app.post("/v1/explorers", (req, res) => {
  console.log(`GET Explorers V1 API ${new Date()}`);
  //Agregar logica para persistir
  console.log(req.body); // parametros de requests
  res.status(201).json({ message: "Creado exitosamente" });
});

app.put("/v1/explorers/:id", (req, res) => {
  console.log(`PUT Explorers V1 API ${new Date()}`);
  console.log(req.body); // parametros para actualizar
  console.log(req.params.id)
  res.status(200).json({ message: "Actualizado exitosamente" });
});

app.delete("/v1/explorers/:id", (req, res) => {
    console.log(`DELETE Explorers V1 API ${new Date()}`);
    // Agregar logica para eliminar el registro enviado
    console.log(req.body);
    console.log(req.params.id)
    res.status(200).json({ message: "Actualizado exitosamente" });
  });
  

// Con esto inicializamos el app
app.listen(port, () => {
  console.log(`Example app listeting on port ${port}`);
});
