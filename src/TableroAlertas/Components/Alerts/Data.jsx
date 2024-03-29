import React, { useEffect, useState } from 'react'
import { DataTable, Panel } from 'siampluscomunes'
import { SetColumnsTable, SetRowsTable } from '../../Actions/Data'

const Data = (props) => {
    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState([])

    useEffect(() => {
        SetColumnsTable(setColumns)
        SetRowsTable(setRows)
    }, [])

    return (
        <Panel title='Pacientes con alertas'>
            <div className='row'>
                <div className='col-12 col-md-9'>
                    {columns.length > 0 &&
                        <DataTable
                            wrapperClasses="table-responsive"
                            classes=" -table"
                            keyField='id'
                            columns={columns}
                            rows={rows}
                        />
                    }
                </div>
                <div className='col-12 col-md-3'>
                    <div className='card shadow p-2' style={{ color: '#484848' }}>
                        <h5 style={{ color: '#044E90' }}>Alertas más frecuentes</h5>
                        <div className='text-center my-2 text-truncate font-weight-bold'>
                            <img
                                src="https://www.gifsanimados.org/data/media/931/ventana-de-alerta-y-notificacion-imagen-animada-0007.gif"
                                border="0"
                                alt="alert siam"
                                title="programing"
                                height={'60px'}
                            /> <br />
                            <small>Programador Cansado = 5</small>
                        </div>
                        <div className='text-center my-2 text-truncate font-weight-bold'>
                            <img
                                src="https://www.gifsanimados.org/data/media/931/ventana-de-alerta-y-notificacion-imagen-animada-0007.gif"
                                border="0"
                                alt="alert siam"
                                title="programing"
                                height={'60px'}
                            /> <br />
                            <small>Programador Cansado = 5</small>
                        </div>
                        <div className='text-center my-2 text-truncate font-weight-bold'>
                            <img
                                src="https://www.gifsanimados.org/data/media/931/ventana-de-alerta-y-notificacion-imagen-animada-0007.gif"
                                border="0"
                                alt="alert siam"
                                title="programing"
                                height={'60px'}
                            /> <br />
                            <small>Programador Cansado = 5</small>
                        </div>
                        <div className='text-center my-2 text-truncate font-weight-bold'>
                            <img
                                src="https://www.gifsanimados.org/data/media/931/ventana-de-alerta-y-notificacion-imagen-animada-0007.gif"
                                border="0"
                                alt="alert siam"
                                title="programing"
                                height={'60px'}
                            /> <br />
                            <small>Programador Cansado = 5</small>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    )
}

export default Data