import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Open_modal from './Open_modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function SimpleTable(props) {
  const { classes } = props;
  const [data, SetData]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/fetchusers').then((response)=>{
        console.log('1111111111111',response.data.message);
        SetData(response.data.message)
    })
  }, [])
  




  let navigate = useNavigate() 

  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end',pb:4, bgcolor:"#1976d2"}}>
        <Button variant="contained" color='secondary' onClick={()=>{navigate('/register')}} sx={{ mt: 3, mr: 5 }}>{'Go To Register Page'}</Button>
    </Box>
    <Typography sx={{fontSize:"2rem"}}>User Details</Typography>
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center',paddingBottom:10}}>
        
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bold"}}>Name</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Email</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>phone</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Country</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>id type</TableCell>
            {/* <TableCell align="center" style={{fontWeight:"bold"}}>id proof</TableCell> */}
            <TableCell align="center" style={{fontWeight:"bold"}}>Document Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => {
            return(
              <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="center">{row.Email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.Country}</TableCell>
              <TableCell align="center">{row.id_type}</TableCell>
              {/* <TableCell align="center">{row.id_proof}</TableCell> */}
              <TableCell align="center"><Open_modal data={row.id_data} givenname={row.Name} fulldata/></TableCell>

            </TableRow>
          )})}
        </TableBody>
      </Table>
    </Paper>
    </div>
</>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);