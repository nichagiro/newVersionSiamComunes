import React from 'react'

const IconAlert = (cell, row) => {
    const prueba = [0, 1, 2, 3, 4]
    return (
        <>
            <div className='d-flex flex-wrap justify-content-center'>
                {
                    prueba.map(alert =>
                        <img
                            src="https://www.gifsanimados.org/data/media/931/ventana-de-alerta-y-notificacion-imagen-animada-0007.gif"
                            border="0"
                            alt="alert siam"
                            height={'30px'}
                        />
                    )
                }
            </div>
        </>
    )
}

export default IconAlert