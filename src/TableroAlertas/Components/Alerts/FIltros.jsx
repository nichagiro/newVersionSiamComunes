import React, { useEffect, useState } from 'react'
import { DualDateField, Field, Button, Panel, Form } from 'siampluscomunes'
import { ClickPrint, FillData, SelectAlertTipos, SetAlertTips } from '../../Actions/Filtros'


const Filtros = (props) => {
    const [alerts, setAlerts] = useState([])
    const [checkeds, setCheckeds] = useState([])

    useEffect(() => {
        SetAlertTips(setAlerts)
        FillData(props)
    }, [])

    return (
        <Panel title='Filtros'>
            <div className='d-flex'>
                <DualDateField
                    holder="AlertForm"
                    startLabel="Fecha Inicial"
                    startName="fechaInicial"
                    startRules={{ "required": true }}
                    startMaxDate={new Date()}
                    endLabel="Fecha Final"
                    endName="fechaFinal"
                    endRules={{ "required": true }}
                    endMaxDate={new Date()}
                />
            </div>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <Field
                        label="Tipos de alertas"
                        name="tiposAlerts"
                        parent="AlertForm"
                        type="multiselect-field"
                        columns="col-12"
                        values={alerts}
                        checkeds={checkeds}
                        rules={{ "required": true }}
                        change={props.change}
                        save={(data) => SelectAlertTipos(data, props.state, props.setState)}
                    />
                </div>
                <div className='col-12 col-md-6'>
                    <Button
                        title='Buscar'
                        icon='search'
                        className='mx-2 my-4'
                        type="submit"
                    />
                    <Button
                        title='Imprimir'
                        icon='print'
                        className='mx-2 my-4'
                        onClick={() => ClickPrint(props.state, props.setState, props)}
                    />
                </div>
            </div>
        </Panel>
    )
}

export default Filtros