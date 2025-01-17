import React, { useState } from 'react';
import './App.css';

const AgeCal = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');

  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const calculateAge = () => {
    setError('');
    if (!day || !month || !year) {
      setError('Please enter a valid date.');
      return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
      setError('Date of birth cannot be in the future.');
      return;
    }

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div className="container">
      <h1 className='text-2xl font-serif font-bold text-gray-200 uppercase'> <span className='underline'>Age</span> <span className='text-red-300'>Calculator</span> </h1>
      <div className="form">
        <div className="input-group flex gap-1">
          <input
            type="number"
            placeholder="Day (DD)"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="input"/>

            <select 
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="dropdown h-10 w-5 rounded-lg">
              {<option value=""></option>}
              {generateOptions(1, 31)}
            </select>
        </div>

        <div className="input-group flex gap-1">
          
          
          <input
            type="number"
            placeholder="Month (MM)"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="input"
          />
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="dropdown h-10 w-5 rounded-lg"
          >
            <option value=""></option>
            {generateOptions(1, 12)}
          </select>
        </div>

        <div className="input-group flex gap-1">
          
          <input
            type="number"
            placeholder="Year (YYYY)"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="input"
          />
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="dropdown h-10 w-5 rounded-lg"
          >
            <option value=""></option>
            {generateOptions(1900, new Date().getFullYear())}
          </select>
        </div>

        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {error && <p className="error">{error}</p>}
      {age !== null && !error && <p className="result text-2xl font-serif font-bold">You are <span className='text-red-500'>{age}</span> years old.</p>}
    </div>
  );
};

export default AgeCal;
