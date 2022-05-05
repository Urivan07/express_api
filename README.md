# Montaje de servidor con express y peticiones HTTP: GET, POST, PUT, DELETE

### peticion GET:
* API:
```javascript
app.get("/v1/explorers/:id", (req, res) => {
  console.log(`GET BY ID Explorers V1 API ${new Date()}`);
  const explorer1 = { id: 1, name: "Explorer1" };
  // HTTP code status: 200
  res.status(200).json(explorer1);
});
```
* Peticion:<br>
![get](https://github.com/Urivan07/express_api/blob/master/assets/img/api_get.JPG)


### peticion POST:
* API:
```javascript
app.post("/v1/explorers", (req, res) => {
  console.log(`GET Explorers V1 API ${new Date()}`);
  //Agregar logica para persistir
  console.log(req.body); // parametros de requests
  res.status(201).json({ message: "Creado exitosamente" });
});
```
* Peticion:<br>
![post](https://github.com/Urivan07/express_api/blob/master/assets/img/api_post.JPG)

### peticion PUT:
* API:
```javascript
app.put("/v1/explorers/:id", (req, res) => {
  console.log(`PUT Explorers V1 API ${new Date()}`);
  console.log(req.body); // parametros para actualizar
  console.log(req.params.id)
  res.status(200).json({ message: "Actualizado exitosamente" });
});
```
* Peticion:<br>
![put](https://github.com/Urivan07/express_api/blob/master/assets/img/api_put.JPG)

### peticion DELETE:
* API:
```javascript
app.delete("/v1/explorers/:id", (req, res) => {
  console.log(`DELETE Explorers V1 API ${new Date()}`);
  // Agregar logica para eliminar el registro enviado
  console.log(req.body);
  console.log(req.params.id);
  res.status(200).json({ message: "Actualizado exitosamente" });
});
```
* Peticion:<br>
![delete](https://github.com/Urivan07/express_api/blob/master/assets/img/api_del.JPG)
