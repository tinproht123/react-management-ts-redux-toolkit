import React, { useState } from 'react';
import { useAppDispatch } from '../app/hook';
import { addItem } from '../app/feature/form-slice';

import ButtonContainer from './ButtonContainer';

const departments: string[] = ['IT', 'mechanical', 'economy', 'car technology'];

const Form = () => {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [coSalary, setCoSalary] = useState<number>(1);

  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submited');
    dispatch(
      addItem({
        id: id,
        name: name,
        dob: dob,
        department: department,
        co_salary: coSalary,
        tick: false,
      })
    );
    setId('');
    setName('');
    setDob('');
    setCoSalary(1);
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-control">
        <label>Teacher's ID</label>
        <input required value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Department</label>
        <select
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
        >
          {departments.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label>Teacher's Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Coefficients Salary</label>
        <input
          required
          type="number"
          value={coSalary}
          onChange={(e) => setCoSalary(parseInt(e.target.value))}
        />
      </div>
      <div className="form-control">
        <label>Date of Birth</label>
        <input
          required
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <ButtonContainer />
    </form>
  );
};

export default Form;
