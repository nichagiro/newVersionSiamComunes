// IMPORT LIBRARIES
import React, { useContext } from "react";
import { bindActionCreators } from "redux";
import { reduxForm as ReduxForm, change, submit, reset, getFormValues, untouch } from "redux-form";
import { connect } from "react-redux";

// SIAM COMUNES COMPONENTS
import { Form, Loading } from "siampluscomunes";

// HOOKS
import { StoreContext } from "../../store/Store";

// COMPONENTS
import Filtros from "../../Components/Alerts/FIltros";
import Data from "../../Components/Alerts/Data";
import { isInvalid } from "redux-form";


const HandleSubmit = values => {
    console.log(values)
 }

const Index = (props) => {
    const [state, setState] = useContext(StoreContext)
    return (
        <>
            <Form onSubmit={props.handleSubmit((values) => HandleSubmit(values))}>
                <Filtros state={state} setState={setState} {...props} />
                <Data state={state} setState={setState} {...props}/>
            </Form>
            <Loading display={false} />
        </>
    )
}

const MapStateToProps = state => {
    return {
        form: getFormValues("AlertForm")(state),
        invalid: isInvalid('AlertForm')(state)
    };
};

const MapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            change,
            submit,
            reset,
            untouch
        },
        dispatch
    )
});

export default ReduxForm({
    form: "AlertForm",
    destroyOnUnmount: true,
})(connect(MapStateToProps, MapDispatchToProps)(Index));