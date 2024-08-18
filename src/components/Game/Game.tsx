import React from 'react';
import style from './Game.module.css';
import locs from './locs/locs.json' 
import OilPumps from './OilPumps/OilPumps.tsx';
import Shop from './Shop/Shop.tsx';
declare const window: any;

export default class Game extends React.Component {
	loc: {[key: string]: string};
	locs: {[key:string]: {[key:string]:string}};
	state: {[key:string]: {[key:string]:boolean}}

	constructor(props: object) {
		super(props)
		this.loc={}
		this.locs=locs
		this.state = {
			"menu":{
				'buyMoney': false,
				'buyDiamonds': false,
				'home': false,
				'shop': false,
				'friends': false,
				'map': true
			}
		}
	}

	locSet(language: string):void{
		this.loc = this.locs[language];
	}

	collect(){
		alert("Collect")
	}

	setActive(menu: string):void{
		for (let [key, _] of Object.entries(this.state.menu))
		{
			this.state.menu[key] = false;
		}
		this.state.menu[menu] = true
		this.setState(this.state)
	}

	render(): React.ReactNode {
		// console.log("вывожу информацию об экране")
		return(
			<>
			<div className={style.Game}>
				<div className={style.interface}>
					
					<div className={style.resources}>
						<div className={style.oil}>
							<div className={style.amount}>100</div>
							<img className={style.icon} src='./assets/buttons/oil.png'/>
						</div>
						<div className={style.money}>
							<div className={style.amount}></div>
							<img className={style.icon} src='./assets/buttons/coin.png'/>
							<button className={style.buy} onClick={()=>this.setActive('buyMoney')}></button>
						</div>
						<div className={style.diamonds}>
							<div className={style.amount}></div>
							<img className={style.icon} src='./assets/buttons/diamond.png'/>
							<button className={style.buy} onClick={()=>this.setActive('buyDiamonds')}></button>
						</div>
					</div>

					<OilPumps/>

					<button className={style.collect + ' ' + style.decor} onClick={this.collect}>
						<div className={style.text}>Собрать</div>
					</button>

					<nav className={style.main + ' ' + style.decor}>
						<button className={style.home + ' ' + style[(this.state.menu.home) ? 'active' : '']} 		onClick={()=>this.setActive('home')}></button>
						<button className={style.shop + ' ' + style[(this.state.menu.shop) ? 'active' : '']} 		onClick={()=>this.setActive('shop')}></button>
						<button className={style.friends + ' ' + style[(this.state.menu.friends) ? 'active' : '']}	onClick={()=>this.setActive('friends')}></button>
						<button className={style.map + ' ' + style[(this.state.menu.map) ? 'active' : '']} 			onClick={()=>this.setActive('map')}></button>
					</nav>

					{this.state.menu.shop ? <Shop/> : ''}

				</div>
			</div>
			</>)
	}
}