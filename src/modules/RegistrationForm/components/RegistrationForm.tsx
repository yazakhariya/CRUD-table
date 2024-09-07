import * as React from 'react'
import Button from '@mui/material/Button'
import {
  FormGroup,
  IconButton,
  InputAdornment,
  Input,
  Typography,
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { registerUser } from '../api/actionCreater/fetchRegisterUser'
import { AppDispatch } from 'src/store'

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const dispatch = useDispatch<AppDispatch>()

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleSubmit = () => {
    dispatch(registerUser({ username, password })).then((res) =>
      localStorage.setItem('token', JSON.stringify(res.payload.data.token))
    )
  }

  return (
    <FormGroup
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '30px',
      }}
    >
      <Typography
        variant="h5"
        color="secondary"
        align="left"
        sx={{ fontWeight: 600 }}
      >
        Sign in
      </Typography>
      <Input
        required
        id="outlined-required"
        placeholder="Login"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        id="standard-adornment-password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Submit
      </Button>
    </FormGroup>
  )
}
