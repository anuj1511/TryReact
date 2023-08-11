import React, { useState } from 'react';
import axios from 'axios';

function ApiCaller() {
  const [apiResponse, setApiResponse] = useState('');

  const callApi = async () => {
	try {
      const response = await axios.get('http://localhost:3001/api/names');
      setApiResponse(response.data.message);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  return (
    <div>
      <button onClick={callApi}>Call API</button>
      <p>API Response: {apiResponse}</p>
    </div>
  );
}

export default ApiCaller;
