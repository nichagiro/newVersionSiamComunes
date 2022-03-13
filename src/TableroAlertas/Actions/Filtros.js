import moment from "moment"


export const SelectAlertTipos = (data, state, setState) => {
    setState({
        ...state,
        alertas: {
            ...state.alertas,
            alertsSelecteds: data
        }
    })
}

export const SetAlertTips = setAlerts => {
    const alert = [{
        value: 0,
        key: 0,
        text: 'Todo'
    }]

    for (let index = 1; index < 11; index++) {
        alert.push({
            value: index,
            key: index,
            text: `PRUEBA NUMERO # ${index}`
        })
    }

    setAlerts(alert)
}

export const ClickPrint = ({invalid}) => {
    // invalid "si el formulario tiene errores"
    if (invalid) {
        alert('No se han usado los filtros para generar el reporte')
    }
    else{
        console.log('generando reporte')
    }
}


export const FillData = ({change}) => {
    change('AlertForm','fechaInicial', moment(new Date()).format('DD/MM/YYYY'))
    change('AlertForm','fechaFinal', moment(new Date()).format('DD/MM/YYYY'))
}
