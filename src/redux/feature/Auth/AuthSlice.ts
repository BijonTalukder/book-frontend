import {createAsyncThunk,createSlice} from '@reduxjs/toolkit' 
import axios from 'axios'
import { BaseUrl } from '../../../utility/utility'
interface IUser {
    name:string;
    email : string;
    password:string;

} 
export const createUser = createAsyncThunk(
    "user/createUser",async(payload:IUser)=>{
         const data = await axios.post(`${BaseUrl}/user/create`,payload)
          return data
    }
 )

 const initialState = {
    user:{
        // email:null,
       
    },
    isLoading:false,
    isError:false,
    error:null
 }
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = null
        })
        .addCase(createUser.fulfilled,(state,action)=>{
            state.user = action.payload;
state.isLoading=false

        })
        .addCase(createUser.rejected,(state,action)=>{
            // state.user = null
            state.isError = true;
            state.error = action.error.message

        })
    }

 })
// export const {} = userSlice.actions
 export default userSlice.reducer