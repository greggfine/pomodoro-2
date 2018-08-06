import React, { Component } from 'react';
import Transport from './Transport';
import BreakLength from './BreakLength';
import SessionLength from './SessionLength';

class CountdownClock extends Component {
	constructor(props){
		super(props);

		this.state = {
			minutes: 1,
			seconds: 0,
			sessLen: 1,
			brkLen: 1,
			playState: false
		}

		this.handleClock = this.handleClock.bind(this)
		this.pauseClock = this.pauseClock.bind(this)
		this.resetClock = this.resetClock.bind(this)
		this.incSessLen = this.incSessLen.bind(this)
		this.decSessLen = this.decSessLen.bind(this)
		this.incBrkLen = this.incBrkLen.bind(this)
		this.decBrkLen = this.decBrkLen.bind(this)
		this.handleBreak = this.handleBreak.bind(this)
	}



	handleClock(){
		

		this.interval = setInterval(() => {
			if(this.state.seconds === 0 && this.state.minutes === 0){
				this.pauseClock()
				this.handleBreak()
				
			} else if(this.state.seconds === 0){
					this.setState({
						seconds: 60
					})
					this.state.minutes -= 1;
			}

			this.setState({
				seconds: this.state.seconds -= 1,
				playState: true
			})
		}, 100)
	}

	handleBreak(){
		this.setState({
			minutes: this.state.brkLen -1,
			seconds: 60,
			playState: true
		})
		this.interval = setInterval(() => {
			if(this.state.seconds === 1 && this.state.minutes === 0){
				this.setState({
					minutes: 1,
					seconds: 0,
					sessLen: 1,
					playState: true,
				})
				this.handleClock()
			} else if(this.state.seconds === 1){
					this.setState({
						seconds: 60
					})
					this.state.minutes -= 1;
			}
			else{
				this.setState({
					seconds: this.state.seconds -= 1,
					})
				}
			}, 200)
			
	}

	pauseClock(){
		clearInterval(this.interval);
		this.setState({
			playState: false
		})
	}

	resetClock(){
		this.pauseClock()
		this.setState({
			minutes: 1,
			seconds: 0,
			sessLen: 1,
			playState: false,
			brkLen: 1
		})
	}

	incSessLen(){
		if(this.state.sessLen < 60 && !this.state.playState){
			this.setState({
				sessLen: this.state.sessLen += 1,
				minutes: this.state.sessLen,
				seconds: 0
			})	
		} 
	}

	decSessLen(){
		if(this.state.brkLen > 1 && !this.state.playState){
			this.setState({
			sessLen: this.state.sessLen -= 1,
			minutes: this.state.sessLen,
			seconds: 0
		})
		} 
		
	}

	incBrkLen(){
		if(this.state.brkLen < 60 && !this.state.playState){	
			this.setState({
				brkLen: this.state.brkLen += 1
			})
		}
	}

	decBrkLen(){
		if(this.state.brkLen > 1 && !this.state.playState){
			this.setState({
				brkLen: this.state.brkLen -= 1
			})
		}
	}
 	

	render(){

		const { minutes, seconds, sessLen, brkLen } = this.state;
		let then = this.state.now + 2 * 1000
		return(
			<div style={{ textAlign: 'center'}}>
				<BreakLength decBrkLen={this.decBrkLen} incBrkLen={this.incBrkLen} brkLen={brkLen}/>
				<SessionLength decSessLen={this.decSessLen} incSessLen={this.incSessLen} sessLen={sessLen}/>
				<h1> { String(minutes).padStart(2, "0") }:{ String(seconds).padStart(2, '0') }  </h1>
				<Transport handleClock={this.handleClock} pauseClock={this.pauseClock} resetClock={this.resetClock}/>
			</div>
		)
	}
}


export default CountdownClock;