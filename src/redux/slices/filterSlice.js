import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryType: 0,
  sortType: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryType(state, action) {
      state.categoryType = action.payload
    },
    setSort(state, action) {
      state.sortType = action.payload
    }
  }
})

export const { setCategoryType, setSort } = filterSlice.actions

export default filterSlice.reducer