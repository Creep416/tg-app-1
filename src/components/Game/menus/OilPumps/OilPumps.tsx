import Shop from './PumpShop/PumpShop.tsx';
import style from './OilPumps.module.css';
// import stylePub from './../../StylePublic.module.css'
import { Component, ReactNode } from 'react';
import ShopBox from '../ShopBox/ShopBox.tsx';


export default class OilPumps extends Component
{
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	state:{[key: string]: any};
	constructor(props: object) {
		super(props)
		this.state = {
			"pump_levels": [0, 1, 2, 3],
			"pump_active": false
		}
	}
	
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setActiveShop(e: any){
		const pump_number: number = e.target.attributes.name.value;
		this.state.pump_active = pump_number
		this.setState(this.state)
	}

	render(): ReactNode {
		const oilPumpsNode: ReactNode[] = [];
			for (let i = 0; i < this.state.pump_levels.length; i++)
			{
				//object with node of oil pumps with data about level
				oilPumpsNode.push(
						<button
						key = {i}
						name = {String(i)}
						className={style["b"+i]}
						style={{backgroundImage: 'url(./OilPumps/lvl_'+this.state.pump_levels[i]+'_sh.png)'}}
						onClick={(e) => {this.setActiveShop(e)}}
						></button>
					)
			}
		return(
			<div className={style.OilPumps}>
				{oilPumpsNode}
				{(this.state.pump_active) ? 
					<ShopBox 
						onClick={() => {this.state.pump_active = false; this.setState(this.state)}}
						insideList={<Shop activePump={this.state.pump_active} shopList={this.state.pump_levels}/>}/>	
					: ''}
			</div>
			)
		}

}