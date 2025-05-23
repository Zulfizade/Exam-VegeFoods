import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const getProductThunk = createAsyncThunk('product/getProduct', async () => {
    const response = await axios.get('http://localhost:2222/vegetable');
    return response.data;
});


const postProductThunk = createAsyncThunk('product/postProduct', async (data) => {
    const response = await axios.post('http://localhost:2222/vegetable', data);
    return response.data;
});


const deleteProductThunk = createAsyncThunk('product/deleteProduct', async (id) => {
    await axios.delete(`http://localhost:2222/vegetable/${id}`);
    return id;
});


const initialState = {
    vegetable: [],
    loading: false,
    error: null,
};

const vegetableSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProductThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.vegetable = action.payload;
            })
            .addCase(getProductThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(postProductThunk.fulfilled, (state, action) => {
                state.vegetable.push(action.payload);
            })
            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                state.vegetable = state.vegetable.filter(item => item._id !== action.payload);
            });
    },
});


export { getProductThunk, postProductThunk, deleteProductThunk };


export default vegetableSlice.reducer;
