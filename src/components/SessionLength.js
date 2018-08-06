import React from 'react';

const SessionLength = ({ decSessLen, incSessLen, sessLen }) => {
	return (
		<div>
			<h2>SessionLength</h2>
			<button onClick={decSessLen}>minus</button>
			<span>{sessLen}</span>
			<button onClick={incSessLen}>plus</button>
		</div>
	)
}

export default SessionLength