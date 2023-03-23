import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react';
import axios from 'axios';
import StructuredData from './StructuredData';
// import UForms from './UnstructureForms';
import UnstructureForms from './UnstructureForms'
import NameAccuracy from './NameAccuracy';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Open_modal(props) {
    const [photoBt, setPbt] = React.useState("contained");
    const [modBt, setMbt] = React.useState("outlined");
    const [qnBt, setQnbt] = React.useState("outlined");
    const [show, setShow] = React.useState("struct");


    const [data, SetData]=useState([])
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/documentdata/${props.id}`).then((response)=>{
          console.log('1111111111111',response.data.message);
          SetData(response.data.message)
      })
      }, [])


      const handlePhotobt = () => {
        setShow("photos");
        setPbt("contained");
        setMbt("outlined");
        setQnbt("outlined");
      };
    
      const handleModbt = () => {
        setShow("mods");
        setMbt("contained");
        setQnbt("outlined");
        setPbt("outlined");
      };
    
      const handleQnbt = () => {
        setShow("qns");
        setQnbt("contained");
        setMbt("outlined");
        setPbt("outlined");
      };
    
      const handleSelect =()=>{
        setShow("sele");
        setQnbt("outlined");
        setMbt("outlined");
        setPbt("outlined");
      }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen}>Detailed View</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Box sx={style}>
                <Stack
                  direction="colomn"
                  spacing="4px"
                  justifyContent="center"
                  sx={{ pt: 2 }}
                >
                  <Button
                    variant={photoBt}
                    color="error"
                    sx={{ mr: 1 }}
                    onClick={handlePhotobt}
                  >
                    Structured Data
                  </Button>
                  <Button
                    variant={modBt}
                    color="secondary"
                    onClick={handleModbt}
                  >
                    Unstructured data
                  </Button>
                  &nbsp;&nbsp;
                  <Button variant={qnBt} onClick={handleQnbt}>
                    Name Accuracy
                  </Button>
                </Stack>
                

                <>
                  {photoBt === "contained" ?  <StructuredData data={props.data}/> : ""}

                  {modBt === "contained" ? <UnstructureForms data={props.data}/> : ""}
  
                  {qnBt === "contained" ? <NameAccuracy data={props.data} givenname={props.givenname}/>  : ""} 

                  </>

                    {/* <UnstructureForms data={props.data}/> */}
                    {/* <structuredData/> */}
                </Box>
                {/* <Fade in={open}> */}
                   {/* <structuredData/> */}
                   {/* <div>hai</div> */}
                {/* </Fade> */}
            </Modal>
        </div>
    )
}

export default Open_modal