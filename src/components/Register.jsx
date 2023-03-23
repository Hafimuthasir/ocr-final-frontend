import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import Select from '@mui/material';
import { FormControl,InputLabel,MenuItem,Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'


function Register() {
    let navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('')
    const[photo,setPhoto]=useState()
    const[idType,setIdType] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm()
   
    const handleSubmits = (e) => {
        console.log(photo.type);
        let filetype = ""
        if (photo.type === "application/pdf"){
            filetype = "pdf"
        }else {
            filetype = "image"
        }
        console.log(filetype);
        const formData = new FormData()
        formData.append("Name", name)
        formData.append("Email", email)
        formData.append("Country", country)
        formData.append("phone", phone)
        formData.append("id_proof", photo)
        formData.append("id_type", idType)
        formData.append("id_filetype", filetype)


        axios.post('http://127.0.0.1:8000/api/register', formData).then((response) => {
            console.log(response.data)
            setName('')
            setEmail('')
            setCountry('')
            setPhone('')
            alert(JSON.stringify(response.data.message))
        }).catch((error) => {
            alert(JSON.stringify(error.response.data.message))
        })
    }

    return (

        <React.Fragment>
 
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        {...register('name', { required: true })}
                        value={name} onChange={(e) => { setName(e.target.value) }}
                    />
                    {errors.name && <span>This field is required</span>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        variant="standard"
                        {...register('email', { required: true})}
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span>This field is required</span>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        variant="standard"
                        {...register('country', { required: true })}
                        value={country} onChange={(e) => setCountry(e.target.value)}
                    />
                    {errors.country && <span>This field is required</span>}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        fullWidth
                        variant="standard"
                        {...register('phone', { required: true })}
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <span>This field is required</span>}
                </Grid>

                <Grid item xs={12} sm={6}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="id-type-label">ID Type</InputLabel>
                    <Select
                        labelId="id-type-label"
                        id="id-type"
                        name="idType"
                        defaultValue={idType}
                        value={idType}
                        onChange={(e) => setIdType(e.target.value)}
                        label="ID Type"
                        // {...register('idType', { required: true })}
                    >
                        <MenuItem value="passport">Passport</MenuItem>
                        <MenuItem value="license">Driving Licence</MenuItem>
                        <MenuItem value="adhaar">National ID</MenuItem>
                    </Select>
                    {errors.idType && <span>This field is required</span>}
                </FormControl>
            </Grid>


                <Grid item xs={12} sm={6}>
                    <input type="file" onChange={(e) => { setPhoto(e.target.files[0]) }} />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={handleSubmit((e) => handleSubmits(e))} sx={{ mt: 3, ml: 1 }}>{'Next'}</Button>
            </Box>
        </React.Fragment>
    )
}

export default Register
