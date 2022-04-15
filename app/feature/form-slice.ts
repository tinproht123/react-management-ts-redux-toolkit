import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListState } from '../../interface';

interface FormState {
  list: ListState[];
  deleting: boolean;
  editing: boolean;
}

const initialState: FormState = {
  list: [
    {
      id: '1',
      name: 'Ngo Ba Kha',
      dob: '24-5-1986',
      department: 'IT',
      co_salary: 4,
      tick: false,
    },
    {
      id: '2',
      name: 'Huan Hoa Hong',
      dob: '30-6-1972',
      department: 'Economy',
      co_salary: 6,
      tick: false,
    },
  ],
  deleting: false,
  editing: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListState>) => {
      const existedId: undefined | string = state.list.find(
        (item: ListState) => item.id === action.payload.id
      );
      //check if id has existed, show alert and do nothing
      if (existedId !== undefined) {
        alert('ID has existed!');
        return;
      }
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        dob: action.payload.dob,
        department: action.payload.department,
        co_salary: action.payload.co_salary,
        tick: action.payload.tick,
      };
      state.list.push(newItem);
    },
    toggleDelete: (state) => {
      if (!state.deleting) {
        state.deleting = !state.deleting;
      } else {
        state.list = state.list.filter(
          (item: ListState) => item.tick === false
        );
        state.deleting = !state.deleting;
      }
    },
    toggleTick: (state, action: PayloadAction<any>) => {
      state.list.map((item) => {
        if (item.id === action.payload.id) {
          item.tick = !item.tick;
        }
      });
    },
  },
});

export const { addItem, toggleDelete, toggleTick } = formSlice.actions;
export default formSlice.reducer;
