import React from 'react'

function UnstructureForms(props) {
  return (
    <div>
    <h1>Unstructured Data</h1>
    <>
    {props.data !== null?
    <p>{props.data.id_fulldata}</p>
    :"" }
    </>
    </div>

  )
}

export default UnstructureForms