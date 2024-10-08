import { Component, ReactNode, createContext } from 'react';
import style from './Collect.module.css';
import type * as Ifc from './Collect.ifc.d.ts';

export default class Collect extends Component {
	props: Ifc.Iprops;
	interval: number;
	constructor(props: Ifc.Iprops) {
		super(props)
		this.props = props
		this.interval = 1000;
		// this.context = createContext({})
	}

	componentDidMount() {
		// this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
		console.log(this.context)
	}

	componentWillUnmount() {
		// clearInterval(this.interval);
	}

	render():ReactNode{
		return(
			<>
			<div className={style.collect_box}>
				
				<button className={style.collect_summ} onClick={()=>{alert("collected!")}}>
					<p className={style.collect}>collect: </p>
					<p className={style.summ}>123456</p>
				</button>

				<button className={style.use_booster} onClick={()=>{alert("booster!")}}>
				</button>
			
			</div>
			</>
			)
	}
}