import React, { Component } from 'react';
import Transport from './Transport';
import BreakLength from './BreakLength';
import SessionLength from './SessionLength';

class CountdownClock extends Component {
	constructor(props){
		super(props);

		this.state = {
			seconds: 0,
			minutes: 1,
			sessLen: 1,
			playState: false,
			initSeconds: true,
			brkLen: 1,
		}

		this.toggleClock = this.toggleClock.bind(this)
		this.resetClock = this.resetClock.bind(this)
		this.incSessLen = this.incSessLen.bind(this)
		this.decSessLen = this.decSessLen.bind(this)
		this.incBrkLen = this.incBrkLen.bind(this)
		this.decBrkLen = this.decBrkLen.bind(this)
	}


	toggleClock(){
		this.setState({
			playState: !this.state.playState
		})
		
		if(!this.state.playState){

			this.interval = setInterval(() => {
				if(this.state.seconds === -60 && this.state.minutes === 0){
					clearInterval(this.interval)
					return
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
							initSeconds: false,
						}
					})

			}, 200)
		} else{
			clearInterval(this.interval);
		}
	}

	resetClock(){
		clearInterval(this.interval)
		this.setState({
			seconds: 0,
			sessLen: 25,
			minutes: 25,
			playState: false,
			initSeconds: true,
			brkLen: 1
		})
	}

	incSessLen(){
		if(this.state.sessLen < 60 && !this.state.playState){
			this.setState((currentState) => {
				return{
					sessLen: currentState.sessLen += 1,
					initSeconds: true,
					minutes: this.state.sessLen,
					seconds: 0
				}
			})	
		} 
	}

	decSessLen(){
		if(this.state.sessLen > 1 && !this.state.playState){
			this.setState((currentState) => {
				return{
					sessLen: currentState.sessLen -= 1,
					initSeconds: true,
					minutes: this.state.sessLen,
					seconds: 0
				}
			})
		} 
		
	}



	incBrkLen(){
		if(this.state.brkLen < 60 && !this.state.playState){	
			this.setState((currentState) => {
				return {
					brkLen: currentState.brkLen += 1
				}
			})
		}
	}

	decBrkLen(){
		if(this.state.brkLen > 1 && !this.state.playState){
			this.setState((currentState) => {
				return {
					brkLen: currentState.brkLen -= 1
				}
			})
		}
	}


	render(){

		const { minutes, seconds, sessLen, brkLen } = this.state;
		return(
			<div style={{ textAlign: 'center'}}>

				<SessionLength 
					sessLen={sessLen}
					incSessLen={this.incSessLen}
					decSessLen={this.decSessLen}
				/>

				<BreakLength 
					brkLen={brkLen}
					incBrkLen={this.incBrkLen}
					decBrkLen={this.decBrkLen}
				/>
	
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