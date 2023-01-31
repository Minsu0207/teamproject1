import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";



let db = createSlice({
    name: 'db',
    initialState: [
        {
            "Column1": 6,
            "GPS_X": 129.158967,
            "GPS_Y": 35.235696,
            "result": 1
        },
        {
            "Column1": 7,
            "GPS_X": 129.158978,
            "GPS_Y": 35.23569,
            "result": 0
        },
        {
            "Column1": 8,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 9,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 10,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 11,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 12,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 13,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 14,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 15,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 16,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 17,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 18,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 19,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 20,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 21,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 22,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 23,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 24,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 25,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 26,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 27,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 28,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 29,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 30,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 31,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 32,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 33,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 34,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 35,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        },
        {
            "Column1": 36,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 1
        },
        {
            "Column1": 37,
            "GPS_X": 129.159004,
            "GPS_Y": 35.235727,
            "result": 0
        }

    ],
    reducers: {
        getDbList(state, action) {
            if (state.length == 0) {
                state = action.payload;
                return state
            }
        }
    }
})

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
        db: db.reducer,
        test: test.reducer,
        drive: drive.reducer,
        vehicle: vehicle.reducer
    }
})
export let { getDbList } = db.actions
export let { getTestList } = test.actions
export let { getDriveList } = drive.actions
export let { getVehicleList } = vehicle.actions

