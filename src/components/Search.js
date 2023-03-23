import React, {useState} from 'react';
import {STUDENTS} from './../studentList';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split('-');
  const [yyyy, mm, dd] = validityDate.split('-');
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return (maxValid >= selected) && (maxValid >= today);
}

function Search({setResidentList, setError, residentList}) {
  const [name, setName] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const onAdd = () => {
    const filter = STUDENTS.filter(n => n.name.toLowerCase() === name.toLowerCase());
    if (!filter.length) {
      setError(`Sorry, ${name} is not a verified student!`);
    } else if (filter.length && !checkValidity(joiningDate, filter[0].validityDate)) {
      setError(`Sorry, ${name}'s validity has Expired!`);
    } else {
      residentList.push(name.toLowerCase())
      setResidentList([...residentList]);
      setError('');
      setName('');
      setJoiningDate('');
    }
  }
  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">Student Name:
        <div>
          <input id="studentName" value={name} data-testid="studentName" type="text" onChange={e => setName(e.target.value)} className="mr-30 mt-10"/>
        </div>
      </label>
      <label htmlFor="joiningDate">Joining Date:
        <div>
          <input id="joiningDate" value={joiningDate} data-testid="joiningDate" type="date" onChange={e => setJoiningDate(e.target.value)} className="mr-30 mt-10"/>
        </div>
      </label>
      <button type="button" onClick={onAdd} data-testid="addBtn" className="small mb-0">Add</button>
    </div>
  );
}

export default Search;

