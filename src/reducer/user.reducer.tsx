import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IPaginationWithSearchType } from "../config/constants";
import userService from "../service/user.service";
import { set } from "react-hook-form";

export const getAllUserLists = createAsyncThunk(
    "User/getAllUserLists",
    async (params: IPaginationWithSearchType) => {
        return await userService.getRequest('/user', {
            params: {
                ...params
            }
        });
    }
)
const UserSlicer = createSlice({
    name:"User",
    initialState:{
         userList:null,
         userPagination:null,
         selectedUser:null
    },
    reducers:{
        setSelectedUser:(state,action)=>{
            state.selectedUser=action.payload;
        }
    },
    extraReducers:(builder)=>{
      builder.addCase(getAllUserLists.fulfilled,(state,action)=>{
          state.userList=action.payload.data;
          state.userPagination=action.payload.options.pagination;
      });
      builder.addCase(getAllUserLists.rejected,(state)=>{
        state.userList=null;
        state.userPagination=null;
      });
    }
})

export const { setSelectedUser } = UserSlicer.actions;
export default UserSlicer.reducer;