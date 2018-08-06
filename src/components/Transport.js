import React from 'react';

const Transport = ({ toggleClock, resetClock, playState }) => {
	return (
		<div>
				<button id="start_stop" onClick={toggleClock}>
					{ playState? this.textContent = 'pause':'play' }
				</button>
				<button id="reset" onClick={resetClock}>Reset</button>
		</div>
	)
}

export default Transport