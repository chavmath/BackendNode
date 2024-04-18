// Get All Clients from DB
const getContractsDB = (req, res) => {
    const results = [
        {
            id: 1,
            nombre_cli: "Supermaxi",
            monto: 1000,
            fecha_con: "2023-01-17T13:30:29.000Z"
        },
        {
            id: 2,
            nombre_cli: "SanaSana",
            monto: 2000,
            fecha_con: "2024-01-17T13:30:29.000Z"
        },
        {
            id: 3,
            nombre_cli: "Chevrolet",
            monto: 3000,
            fecha_con: "2024-02-17T13:30:29.000Z"
        }
    ];
            res.json(results);
}

const filterContractsByDate = (req, res) => {
    const data = req.params.data;
    console.log(data);
    let datos = data.split(',');
    const results = [
        {
            id_cli: 1,
            nombre_cli: "Supermaxi",
            monto_con: 1000,
            fecha_con: "2023-01-17T13:30:29.000Z"
        },
        {
            id_cli: 2,
            nombre_cli: "SanaSana",
            monto_con: 2000,
            fecha_con: "2024-01-17T13:30:29.000Z"
        },
        {
            id_cli: 3,
            nombre_cli: "Chevrolet",
            monto_con: 3000,
            fecha_con: "2024-02-17T13:30:29.000Z"
        }
    ];

    let filteredResults = results.filter(item => {
        let fecha_con = new Date(item.fecha_con);
        let inicio = new Date(datos[0]);
        let final = new Date(datos[1]);
    
        return fecha_con >= inicio && fecha_con <= final;
    });
    console.log(filteredResults);
            res.json(filteredResults);
}

module.exports = {
    getContractsDB,
    filterContractsByDate
};