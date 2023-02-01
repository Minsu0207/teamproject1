import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let test = createSlice({
    name: 'test',
    initialState: [],
    reducers: {
        getTestList(state, action) {
            if (state.length == 0) {
                state = action.payload;
                return state
            }
        }
    }
})
let drive = createSlice({
    name: 'drive',
    initialState: [],
    reducers: {
        getDriveList(state, action) {
            if (state.length == 0) {
                state = action.payload;
                return state
            }
        }
    }
})

let vehicle = createSlice({
    name: 'vehicle',
    initialState: [],
    reducers: {
        getVehicleList(state, action) {
            if (state.length == 0) {
                state = action.payload;
                return state
            }
        }
    }
})


export default configureStore({
    reducer: {
        test: test.reducer,
        drive: drive.reducer,
        vehicle: vehicle.reducer
    }
})
export let { getTestList } = test.actions
export let { getDriveList } = drive.actions
export let { getVehicleList } = vehicle.actions

