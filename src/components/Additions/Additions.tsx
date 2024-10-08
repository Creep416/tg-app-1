import style from './Additions.module.css';
import {Component, ReactNode} from 'react';

class ClosingBackground extends Component
{
	declare props: Readonly<{ onclick: React.MouseEventHandler; node: ReactNode; }>;
	
	constructor(props: object){
		super(props)
	}
	render(): ReactNode
	{
		return(
			<>
			<div className={style.closingArea} onClick={this.props.onclick}>
			</div>
			{this.props.node}
			</>);
	}
}

export{ ClosingBackground }