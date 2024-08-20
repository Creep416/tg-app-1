import React from 'react';
import style from './Game.module.css';
import stylePublic from './StylePublic.module.css'
import locs from './locs/locs.json' 
import OilPumps from './menus/OilPumps/OilPumps.tsx';
import Shop from './menus/Shop/Shop.tsx';
import Friends from './menus/Friends/Friends.tsx';
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
							<button className={style.buy} onClick={()=>{alert("Активно окно покупки"); this.setActive('buyMoney')}}></button>
						</div>
						<div className={style.diamonds}>
							<div className={style.amount}></div>
							<img className={style.icon} src='./assets/buttons/diamond.png'/>
							<button className={style.buy} onClick={()=>{alert("Активно окно покупки"); this.setActive('buyDiamonds')}}></button>
						</div>
					</div>


					<button className={style.collect + ' ' + stylePublic.decor} onClick={this.collect}>
						<div className={style.text}>Собрать</div>
					</button>

					<nav className={style.main + ' ' + stylePublic.decor}>
						<button className={style.home + ' ' + (this.state.menu.home ? style.active : '')} 		onClick={()=>this.setActive('home')}></button>
						<button className={style.shop + ' ' + (this.state.menu.shop ? style.active : '')} 		onClick={()=>this.setActive('shop')}></button>
						<button className={style.friends + ' ' + (this.state.menu.friends ? style.active : '')}	onClick={()=>this.setActive('friends')}></button>
						<button className={style.map + ' ' + (this.state.menu.map ? style.active : '')} 		onClick={()=>this.setActive('map')}></button>
					</nav>

					{/*Различные менюшки / different menus*/}
					{/*{this.state.menu.map ? <OilPumps/> : ''}*/}
					<OilPumps/>
					{this.state.menu.shop ? <Shop/> : ''}
					{this.state.menu.friends ? <Friends/> : ''}

				</div>
			</div>
			</>)
	}
}