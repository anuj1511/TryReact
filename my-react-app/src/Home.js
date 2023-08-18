import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { TextField, alertClasses } from '@mui/material';
import axios from 'axios';
import './App.css'

export const Home = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("")

	const handleChange = (event) => {
		setInput(event.target.value);
	}

	const callApi = async () => {
		try {
		  const response = await axios.post('http://localhost:3001/api/names', {"name": input});
			setOutput(JSON.stringify(response.data));
		} catch (error) {
		  console.error('Error calling API:', error);
		}
	};

	return (
		<>
			<div className="centered-container">
				<TextField
					id="outlined-required"
					label="Required"
					defaultValue={input}
					onChange={handleChange}
				/>
				<Button variant="contained" style={{ marginTop: '5px' }}
					onClick={callApi}>Post api</Button>

				<div>{output}</div>
		
			</div>
		</>
	)
}
