import React from 'react'
import { Modal, Loading, Button } from 'siampluscomunes'
import { SetModal } from '../../Actions/Notificate'

const Notificate = ({ state, setState }) => {
    return (
        <>
            <Modal auto display={state.modal} close={() => SetModal(state, setState, false)}>
                <div>
                    <b>{state.modal.title}</b>
                    <p>{state.modal.body}</p>
                </div>
                <div className='d-flex justify-content-end'>
                    <Button
                        title='Cerrar'
                        icon='close'
                        onClick={() => SetModal(state, setState, false)}
                    />
                </div>
            </Modal>
            <Loading display={state.loading} />
        </>
    )
}

export default Notificate

