import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { auth } from '../store/profile/actions'
import { signIn } from '../services/firebase'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material'

export function SignIn() {
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signIn(inputs.email, inputs.password)
      dispatch(auth(true))
      navigate('/chat')
    } catch (error) {
      console.log(error)
      setError(error.message)
      setInputs({email: '', password: ''})
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {error && (
        <Alert severity="error">{error}</Alert>
      )}
      
      <Typography gutterBottom variant="h5" component="div">SingIn</Typography>
      
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3}>
          <Grid item>
          <TextField 
            id="outlined-basic" 
            label="E-mail" 
            variant="outlined"
            size="small"
            color="success"               
            type="email" 
            value={inputs.email} 
            name="email"
            onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
            autoFocus={true}
          />
          </Grid>
           <Grid item>
          <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            size="small"
            color="success"               
            type="text" 
            value={inputs.password} 
            name="password"
            onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
          />
          </Grid>
           <Grid item>
          <Button  
            type='submit' 
            variant="outlined" 
            color="success"
          >login
          </Button>
          </Grid>
        </Grid>
      </form>
      {loading && (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <CircularProgress />
        </Box>
      )}
    </>
  )
}
