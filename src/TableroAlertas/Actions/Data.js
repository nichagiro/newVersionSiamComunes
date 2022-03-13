export const SetColumnsTable = (setColumns) => {
    const columns = [
        {
            dataField: "servicio",
            text: "Servicio",
            sort: true,
            title: true,
        },
        {
            dataField: "paciente",
            text: "Paciente",
            sort: true,
            title: true,
        },
        {
            dataField: "trafico",
            text: "Tráfico / HG",
            sort: true,
            title: true,
        },
        {
            dataField: "estado",
            text: "Estado actual",
            sort: true,
            title: true,
        },
        {
            dataField: "alertas",
            text: "Alertas",
            sort: true,
            title: true,
        }
    ]
    setColumns(columns)
}


export const SetRowsTable = (setRows) => {
    const rows = [];
    for (let index = 0; index < 10; index++) {
        const data = {
            id: index,
            servicio: `servicio - ${index}`,
            paciente: `paciente - ${index}`,
            trafico: `trafico - ${index}`,
            estado: `estado - ${index}`,
            alertas: `Pruealertasba - ${index}`
        }
        rows.push(data)
    }
    setRows(rows)
}