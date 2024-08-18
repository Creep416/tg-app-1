import style from './OilPumps.module.css';
import {Component, ReactNode} from 'react'


export default class OilPumps extends Component
{
	state:{[key: string]: any};
	
	constructor(props: object) {
		super(props)
		this.state = {"pump_level": [0, 0, 0, 1]}
	}
	
	upgrade(e: any){
		var pump_name:number = e.target.attributes.name.value;
		(this.state.pump_level[pump_name] < 3) ? (this.state.pump_level[pump_name] = this.state.pump_level[pump_name] + 1) : (null);
		this.setState(this.state)
	}


	render(): ReactNode {
		let oilPumpsNode = [];
			for (var i = 0; i < this.state.pump_level.length; i++)
			{
				//object with node of oil pumps with data about level
				oilPumpsNode.push(
						<button 
						key = {i}
						name = {String(i)}
						className={style["b"+i]}
						style={{backgroundImage: 'url(src/components/Game/assets/pumps/lvl_'+this.state.pump_level[i]+'_sh.png)'}}
						onClick={(e) => {this.upgrade(e)}}
						></button>
					)
			}
		return(
			<div className={style.oilPumps}>
				{oilPumpsNode}
			</div>
			)
		}

}