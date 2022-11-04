import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";


export const ntfPictureAll = createAsyncThunk(
    'ntfPicture/ntfPictureAll',

    async function (_, {rejectWithValue, dispatch}) {

        const response = await fetch(`https://api.opensea.io/api/v1/assets?format=json`)
        try {
            if (!response.ok) {
                throw new Error('Server')
            } else {
                const data = await response.json()
                return data
            }

        } catch (error) {
            return rejectWithValue(error.message)
        }

    });


export const ntfPicture1 = createAsyncThunk(
    'ntfPicture/ntfPicture',

    async function ({id, token_id, contract_address, navigate}, {rejectWithValue, dispatch}) {
        console.log(token_id)
        const response = await fetch(`https://api.opensea.io/api/v1/asset/${contract_address}/${token_id}`)
        try {
            if (!response.ok) {
                throw new Error('Server')
            } else {
                const data = await response.json()
                dispatch(pictureInfo(data))
            }
            if (response.ok) {
                navigate(`nft/${id}`)
            }

        } catch (error) {
            return rejectWithValue(error.message)
        }

    });


const ntfPictureSlice = createSlice({
    name: 'ntfPicture',
    initialState: {
        pictures: [],
        picture: {},
        status: "loading"

    },
    reducers: {
        pictureInfo(state, action) {
            state.picture = action.payload
        }
    },
    extraReducers: {
        [ntfPictureAll.pending]: (state) => {
            state.status = 'loading'
            state.pictures = []
        },
        [ntfPictureAll.fulfilled]: (state, action) => {
            state.pictures = action.payload.assets
            state.status = 'success'
        },
        [ntfPictureAll.rejected]: (state, action) => {
            state.status = 'error'
        }
    }

})

export const {ntfPicturesInfo, pictureInfo} = ntfPictureSlice.actions;
export default ntfPictureSlice.reducer;