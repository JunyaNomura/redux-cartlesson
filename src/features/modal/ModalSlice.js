import { createSlice } from '@reduxjs/toolkit';

// モーダルの初期化
const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
    }
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
