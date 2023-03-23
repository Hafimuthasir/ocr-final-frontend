import React from 'react'
import { Typography,Grid,TextField,Box,Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function StructuredData(props) {
  return (
<>
<Typography sx={{textAlign:"center"}}>
    These are the datas extracted from Document
</Typography>
    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        <React.Fragment>
            <Grid container spacing={3}>

            <Grid item xs={12}>
                    <TextField
                        id="pno"
                        name="pno"
                        label="ID_type"
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true }
                        }
                        value={props.data && props.data.id_type?props.data.id_type:"None"}
                    />
                </Grid>

                <Grid item xs={12} >
                    <TextField
                        required
                        id="Name"
                        name="Name"
                        label="Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        inputProps={
                            { readOnly: true }
                        }
                        value={props.data && props.data.id_name}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="ID No."
                        name="ID No."
                        label="ID No."
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true }
                        }
                        value={props.data && props.data.id_no}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="DOB from ID"
                        name="address2"
                        label="Date of Birth"
                        fullWidth
                        variant="standard"
                        inputProps={
                            { readOnly: true }
                        }
                        value={props.data && props.data.id_dob}
                    />
                </Grid>


            </Grid>
            {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={handleClose} sx={{ mt: 3, ml: 1 }}>{'Close'}</Button>
            </Box> */}
        </React.Fragment>
    </Typography>
</>
  )
}

export default  StructuredData