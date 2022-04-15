import React from 'react';
import { useAppSelector } from '../app/hook';
import ListItem from './ListItem';
import { ListState } from '../interface';

const List = () => {
  const list = useAppSelector((state) => state.form.list);
  const deleting = useAppSelector((state) => state.form.deleting);

  return (
    <table>
      <thead>
        <tr>
          {deleting && <th></th>}
          <th>ID</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Department</th>
          <th>Coefficients Salary</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item: ListState) => (
          <ListItem key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
