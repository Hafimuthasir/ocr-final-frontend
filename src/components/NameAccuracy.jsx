
import { Stack } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function NameAccuracy(props) {

  const [case_perc,setCase] = React.useState()
  const [noncase_perc,setNonCase] = React.useState()
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/name_match/${props.givenname}/${props.data && props.data.id_name}`).then((response)=>{
    setCase(response.data.case_percentage)  
    setNonCase(response.data.noncase_percentage)
 
  })
  }, [case_perc,noncase_perc])
  
  return (
    <>
    <h3 style={{textAlign:"center"}}>Name Accuracy</h3>
    <Stack>
      <div>
          <div>
          <span style={{fontWeight:"bold"}}>Name Provided&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.givenname}</span>
          </div>
          <br></br>
        <div >
          <span style={{fontWeight:"bold"}}>Name Extracted From ID&nbsp;&nbsp;:</span>
          {props.data && <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.data.id_name}</span>}
        </div>

        <br></br>
        <div >
          <span style={{fontWeight:"bold"}}>Name Percentage Match&nbsp;&nbsp;:</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{case_perc}</span>
        </div>

        <br></br>
        <div >
          <span style={{fontWeight:"bold"}}>Name Percentage Match(without case sensitivity)&nbsp;&nbsp;:</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{noncase_perc}</span>
        </div>

      </div>

    </Stack>
 </>
  )
}

export default NameAccuracy