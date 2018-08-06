import React from 'react';

const Transport = ({ handleClock, pauseClock, resetClock }) => {
	return (
		<div>
				<button onClick={handleClock}>Play</button>
				<button onClick={pauseClock}>Pause</button>
				<button onClick={resetClock}>Reset</button>
		</div>
	)
}

export default Transport