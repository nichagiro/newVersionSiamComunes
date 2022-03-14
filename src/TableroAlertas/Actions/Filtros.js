import moment from "moment"
import { SetModal } from "./Notificate"


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

export const ClickPrint = (state, setState , {invalid}) => {
    // invalid "si el formulario tiene errores"
    if (invalid) {
        SetModal(state, setState, {
            title : 'NO SE PUEDE GENERAR EL REPORTE',
            body : 'Debe registrar con exito los campos del filtro.'
        })
    }
    else{
        console.log('generando reporte')
    }
}


export const FillData = ({change}) => {
    change('AlertForm','fechaInicial', moment(new Date()).format('DD/MM/YYYY'))
    change('AlertForm','fechaFinal', moment(new Date()).format('DD/MM/YYYY'))
}
