import React from 'react';

const BreakLength = ({ decBrkLen, incBrkLen, brkLen}) => {
	return (
		<div>
			<h2 id="break-label">Break Length</h2>
			<button id="break-decrement" onClick={decBrkLen}>minus</button>
			<span id="break-length">{brkLen}</span>
			<button id="break-increment" onClick={incBrkLen}>plus</button>
		</div>
	)
}

export default BreakLength