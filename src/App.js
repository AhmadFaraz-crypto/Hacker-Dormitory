import React, { useState } from 'react';
import './App.css';
import ResidentsList from './components/ResidentList';
import Search from './components/Search';
import Error from './components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {
  const [residentList, setResidentList] = useState([]);
  const [error, setError] = useState('');
  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search residentList={residentList} setResidentList={setResidentList} setError={setError} />
        {error && <Error error={error} />}
        <ResidentsList residentList={residentList} />
      </div>
    </div>
  );
}

export default App;
