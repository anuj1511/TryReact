import React, { useState } from 'react';
import axios from 'axios';

function GetApiCaller() {
  const [apiResponse, setApiResponse] = useState([]);
  const [error, setError] = useState('');

  const callApi = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/names');
      setApiResponse(response.data);
      setError('');
    } catch (error) {
      console.error('Error calling API:', error);
      setError('Failed to retrieve names.');
    }
  };

  return (
    <div>
      <button onClick={callApi}>Call API</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>API Response:</p>
      <ul>
        {apiResponse.map((name, index) => (
          <li key={index}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GetApiCaller;
