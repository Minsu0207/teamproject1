import { configureStore, createSlice } from "@reduxjs/toolkit";

let db = createSlice({
    name: 'db',
    initialState: [],
    reducers: {
        getDbList(state, action) {
            if (state.length == 0) {
                state = action.payload;
                return state
            }
        }
    }
})




let path = createSlice({
    name: 'path',
    initialState: [
        {
            "x": "35.23245831835351",
            "y": "129.153768499646"
        },
        {
            "x": "35.229521819126944",
            "y": "129.14761754774486"
        },
        {
            "x": "35.21999101090929",
            "y": "129.1311251161073"
        },
        {
            "x": "35.21554620754437",
            "y": "129.1132641447357"
        },
        {
            "x": "35.230947028746705",
            "y": "129.08572340355275"
        }
    ],

})



export default configureStore({
    reducer: {
        db: db.reducer,
        path: path.reducer

    }
})
export let { getDbList } = db.actions