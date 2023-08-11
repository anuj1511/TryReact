import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material';
import './App.css'

export const Home = () => {
	const [input, setInput] = useState("");

	const func = () => {
		alert("Submitted " + input)
	}

	const handleChange = (event) => {
		setInput(event.target.value);
	}

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
					onClick={func}>Contained</Button>

				<div>{input}</div>
			</div>
		</>
	)
}
