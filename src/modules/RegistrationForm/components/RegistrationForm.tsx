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

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = React.useState(false)

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
      <Input required id="outlined-required" placeholder="Login" />
      <Input
        id="standard-adornment-password"
        placeholder="Password"
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
      <Button variant="contained" color="secondary">
        Submit
      </Button>
    </FormGroup>
  )
}
