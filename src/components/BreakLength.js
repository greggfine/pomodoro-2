import React from 'react';

const BreakLength = ({ decBrkLen, incBrkLen, brkLen}) => {
	return (
		<div>
			<h2>BreakLength</h2>
			<button onClick={decBrkLen}>minus</button>
			<span>{brkLen}</span>
			<button onClick={incBrkLen}>plus</button>
		</div>
	)
}

export default BreakLength