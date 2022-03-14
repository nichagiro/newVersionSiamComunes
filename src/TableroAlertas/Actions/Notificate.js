export const SetModal = (state, setState , data) => {
    setState({
        ...state,
        modal: data
    })
}