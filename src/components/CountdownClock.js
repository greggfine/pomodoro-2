import React, { Component } from 'react';
import Transport from './Transport';
import BreakLength from './BreakLength';
import SessionLength from './SessionLength';

class CountdownClock extends Component {
	constructor(props){
		super(props);

		this.state = {
			minutes: 3,
			seconds: 0,
			playState: false,
			initSeconds: true
		}

		this.toggleClock = this.toggleClock.bind(this)
		this.resetClock = this.resetClock.bind(this)
	}


	toggleClock(){
		this.setState({
			playState: !this.state.playState
		})
		
		if(!this.state.playState){

			this.interval = setInterval(() => {
				if(this.state.seconds === -59 && this.state.minutes === 0){
					clearInterval(this.interval)
				}

				if(this.state.seconds === -60 || this.state.seconds === 0){
					this.setState({
						minutes: this.state.minutes -= 1,
						seconds: 0,
					})
				}

				this.setState((currentState) => {
						return {
							seconds: currentState.seconds -= 1,
							initSeconds: false
						}
					})

			}, 1000)
		} else{
			clearInterval(this.interval);
		}
	}

	resetClock(){
		this.setState({
			minutes: 1,
			seconds: 0,
			playState: false,
			initSeconds: true
		})
	}


	render(){

		const { minutes, seconds, } = this.state;
		return(
			<div style={{ textAlign: 'center'}}>
	
				<h1 id="timer-label">Session</h1>
				<h1 id="time-left"> 
					{ String(minutes).padStart(2, "0") }
					:{ 
						this.state.initSeconds? String(seconds).padStart(2, '0')
						:String(seconds + 60).padStart(2, '0') 
					}  
				</h1>
				<Transport 
					toggleClock={this.toggleClock} 
					resetClock={this.resetClock}
					playState={this.state.playState}
				/>
			</div>
		)
	}
}


export default CountdownClock;