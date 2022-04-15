import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { toggleDelete } from '../app/feature/form-slice';

const ButtonContainer = () => {
  const dispatch = useAppDispatch();

  const deleting = useAppSelector((state) => state.form.deleting);

  const handleToggleDelete = () => {
    dispatch(toggleDelete());
  };
  return (
    <div className="button-container">
      <button type="submit">Add</button>
      <button
        type="button"
        onClick={handleToggleDelete}
        className={`${deleting && 'deleting'}`}
      >
        {deleting ? 'Are you sure?' : 'Delete'}
      </button>
      {deleting && <p>Tick on which person you want to delete</p>}
    </div>
  );
};

export default ButtonContainer;
