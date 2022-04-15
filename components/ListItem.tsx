import React, { useState } from 'react';
import { ListState } from '../interface';
import { useAppSelector, useAppDispatch } from '../app/hook';
import { toggleTick } from '../app/feature/form-slice';

const ListItem = (props: ListState) => {
  const { id, name, dob, department, co_salary, tick } = props;
  const [done, setDone] = useState<boolean>(tick);
  const dispatch = useAppDispatch();

  const deleting = useAppSelector((state) => state.form.deleting);

  const handleTick = (e, id) => {
    setDone(e.currentTarget.checked);
    dispatch(toggleTick({ id: id }));
  };

  return (
    <tr>
      {deleting && (
        <td>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => handleTick(e, id)}
          />
        </td>
      )}
      <td>{id}</td>
      <td>{name}</td>
      <td>{dob}</td>
      <td>{department}</td>
      <td>{co_salary}</td>
    </tr>
  );
};

export default React.memo(ListItem);
