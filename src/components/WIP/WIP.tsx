import React from 'react';
import './WIP.css';

export default class WIP extends React.Component {
	constructor(props: object) {
		super(props)
	}

	render(){
		return(
		<>
			<div className="main">
				<div className="clouds"></div>
				<div className="thumbleweedCard">
					<div className="thumbleweed"></div>
				</div>
			</div>
			<div className="landscape">
				<div className="text">
					приложение не адаптировано для альбомного режима
				</div>
			</div>

		</>
		)
	}
}