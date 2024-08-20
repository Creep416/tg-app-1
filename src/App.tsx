import React from 'react'
import Game from './components/Game/Game.tsx'
// import WIP from './components/WIP/WIP'
import './App.css'
declare const window: any;

export default class App extends React.Component {
	constructor (props: object) {
		super(props)
		this.state = {}  
	}

	render() {
		window.Telegram.WebApp.expand()
		return (
		<>
			{/*<WIP/>*/}
			<Game/>
		</>
	)
	}
}