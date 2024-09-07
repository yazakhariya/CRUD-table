import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface userData {
  username: string
  password: string
}

export const registerUser = createAsyncThunk(
  'user/register',
  async (newUser: userData, thunkApi) => {
    try {
      const response = await axios.post(
        'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login',
        newUser
      )
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
