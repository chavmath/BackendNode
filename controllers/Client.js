  
// Get All Clients from DB
const getClientsDB = (req, res) => {
   const result = [
    {
      "id_cli": 1,
      "nombre_cli": "Supermaxi",
      "fecha_creacion": "2023-01-17T13:30:29.000Z"
    },
    {
      "id_cli": 2,
      "nombre_cli": "SanaSana",
      "fecha_creacion": "2023-01-17T13:30:29.000Z"
    },
    {
      "id_cli": 4,
      "nombre_cli": "Chevrolet",
      "fecha_creacion": "2023-01-17T13:30:29.000Z"
    }
  ]
  res.json(result);
}

module.exports = getClientsDB;