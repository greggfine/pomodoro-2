import React from 'react';

const SessionLength = ({ decSessLen, incSessLen, sessLen }) => {
	return (
		<div>
			<h2 id="session-label">Session Length</h2>
			<button id="session-decrement" onClick={decSessLen}>minus</button>
			<span id="session-length">{sessLen}</span>
			<button id="session-decrement" onClick={incSessLen}>plus</button>
		</div>
	)
}

export default SessionLength