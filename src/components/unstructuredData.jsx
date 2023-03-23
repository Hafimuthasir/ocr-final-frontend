import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react';
import axios from 'axios';

function unstructuredData() {
  return (
    <Box sx={style}>
    <Typography id="transition-modal-title" variant="h6" component="h2">
        Detailed View
    </Typography>
    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        <React.Fragment>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={handleClose} sx={{ mt: 3, ml: 1 }}>{'Close'}</Button>
            </Box>
        </React.Fragment>
    </Typography>
</Box>
  )
}

export default unstructuredData