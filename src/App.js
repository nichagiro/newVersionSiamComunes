import React, { useEffect, useState, useRef } from 'react';
import { bindActionCreators } from "redux";
import { reduxForm as ReduxForm, getFormValues, change, submit } from "redux-form";
import { connect } from "react-redux";
import './App.css';
import {
  DataTable,
  Button,
  Drawer,
  Form,
  Field,
  DualDateField,
  Panel,
  Alert
} from 'siampluscomunes';

import moment from 'moment'


const App = ({ change, handleSubmit }) => {
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [alerts, setAlerts] = useState([])

  const node = useRef();
  const columns = [
    {
      dataField: 'id',
      text: 'Id'
    },
    {
      dataField: 'name',
      text: 'Nombre'
    },
    {
      dataField: 'data1',
      text: 'Id',
    },
    {
      dataField: 'data2',
      text: 'Nombre'
    },
    {
      dataField: 'data3',
      text: 'Id'
    },
    {
      dataField: 'data4',
      text: 'Nombre'
    },
    {
      dataField: 'data5',
      text: 'Nombre'
    },
    {
      dataField: 'data6',
      text: 'Nombre'
    },
    {
      dataField: 'data7',
      text: 'Nombre'
    },
    {
      dataField: 'data8',
      text: 'Nombre'
    },
    {
      dataField: 'data9',
      text: 'Nombre'
    },
    {
      dataField: 'data10',
      text: 'Nombre'
    },
    {
      dataField: 'data11',
      text: 'Nombre'
    },
    {
      dataField: 'data12',
      text: 'Nombre'
    },
    {
      dataField: 'test',
      text: 'Campo',
      formatter: (values, row, index) => row.name === 'Modificado' ? <span className="label label-success"> Available</span> : row.test

    }
  ]

  useEffect(() => {
    let data = [];

    for (let i = 0; i < 40; i++) {
      data.push({
        id: i,
        name: `prueba ${i}`,
        data1: "Nicolas Chamorro Giron ",
        data2: "juanma",
        data3: "juanma",
        data4: "juanma",
        data5: "juanma",
        data6: "juanma",
        data7: "juanma",
        data8: "juanma",
        data9: "juanma",
        data10: "juanma",
        data11: "juanma",
        data12: "juanma",
        test: "juanma"
      })
    }

    setRows(data)

    const alert = [{
      id: 0,
      key: 0,
      text: 'Todo'
    }]

    for (let index = 1; index < 11; index++) {
      alert.push({
        id: index,
        key: index,
        text: `PRUEBA NUMERO # ${index}`
      })
    }

    setAlerts(alert)
  }, [])

  const HandleEdit = () => {
    /*let data = rows;
    data = data.map(d => d.id === 34 ? {...d, name: 'Modificado'}: d )

    console.log(data)
    setRows(data);
    setOpen(true);
    */
    let data = node.current.state.filters
    data[JSON.stringify('id')](35)
    //console.log(node.current.props.select({id: 35, name: "prueba 35", test: "juanma"})) 
    node.current.HandleSelect(0, (item) => console.log(item), { id: 35, name: "prueba 35", test: "juanma" })

    //node.current.node.paginationContext.handleChangePage(2)
  }

  const onClose = () => {
    setOpen(false)
  }

  const prueba = () => {
    console.log("aasdasdasd")
  }

  return (
    <div className="container">
      <Alert
        message='Esta es una alerta'
        type='success'
      />
      <Form
        name="ConsultaForm"
        onSubmit={() => console.log("prueba")}
      >

        <Panel title='collapse' collapse>
          <Field
            columns="col-sm-12 col-md-12 mt-2"
            type="text-field"
            name="apellido"
            label="Apellido"
            attributes={{
              value: "Nicolas",
              maxLength: 10,
              required: true
            }}
          />
        </Panel>

        <Field
            label="Tipos de alertas"
            name="tiposAlerts"
            parent="AlertForm"
            type="multiselect-field"
            columns="col-12"
            values={alerts}
            checkeds={[]}
            change={change}
            save={(data) => console.log(data)}
          />

        <DualDateField
          holder="ConsultaForm"
          startName="InitialDate"
          endName="FinallDate"
          endMaxDate={new Date()}
          startMaxDate={new Date()}
          startRules={{ "required": true }}
          endRules={{ "required": true }}
          range={{ value: 1, parameter: "months" }}
        />
        <Field
          disabledInput={true}
          holder="ConsultaForm"
          name="fecha"
          label="fecha"
          columns="col-sm-12 col-md-3 col-lg-2"
          type="date-field"
          attributes={{ onChange: () => console.log("pruebaaa") }}
          onChange={prueba}
          minDate={new Date()}
        />
        <Field
          name="numeroFactura"
          label="Nro. Factura"
          columns="col-sm-12 col-md-3 col-lg-2"
          type="text-field"
          attributes={{ "maxLength": 20 }}
        />
        <Field
          columns="col-sm-12 col-md-12 mt-2"
          type="text-field"
          name="name"
          label="Name"
          holder="ConsultaForm"
          attributes={{
            "maxLength": 10,
            "required": true
          }}
        />
        <Field
          columns="col-sm-12 col-md-12 mt-2"
          type="text-field"
          name="apellido"
          label="Apellido"
          holder="ConsultaForm"
          attributes={{
            value: "Nicolas",
            maxLength: 5,
            required: true
          }}
        />
        <Button title="Prueba" onClick={HandleEdit} />
        <Button title="submit" type="submit" />

        <DataTable
          wrapperClasses="table-responsive"
          classes="scroll-table"
          keyField='id'
          rows={rows}
          columns={columns}
          select={(item) => console.log(item, "select")}
          filters
          exports={{ name: `relación_citas` }}
          ref={node}
        />
        <Drawer placement="bottom" open={open} onClose={onClose}>
          <h2>hola mundo</h2>
        </Drawer>
      </Form>
    </div>
  );
}


const MapStateToProps = state => {
  return {
    form: getFormValues("ConsultaForm")(state)
  };
};

const MapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      change,
      submit
    },
    dispatch
  )
});


export default ReduxForm({
  form: "ConsultaForm",
  destroyOnUnmount: true
})(connect(MapStateToProps, MapDispatchToProps)(App));