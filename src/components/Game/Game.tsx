import {Component, ReactNode} from 'react';
import style from './Game.module.css';
import stylePublic from './../../StylePublic.module.css';
import type * as Ifc from './Game.ifc.d.ts';

import OilPumps from './menus/OilPumps/OilPumps.tsx';
import Collect from './menus/Collect/Collect.tsx';
import Friends from './menus/Friends/Friends.tsx';
import Resources from './Resources/Resources.tsx';
import ShopBox from './menus/ShopBox/ShopBox.tsx';

type Props = {
	gameData: IgameData;
}

export default class Game extends Component {
	props: Props;
	state: Ifc.Istate;
	window: React.ReactNode;
	gameData: IgameData;

	

	constructor(props: Props) {
		super(props)
		this.props = props;
		this.gameData = props.gameData;
		this.state = {
			'menu': {
				'buyMoney': false,
				'buyDiamonds': false,
				'home': true,
				'shop': false,
				'friends': false,
				'worldMap': false
			}
		}
	}

	collect(){
		alert('Collect')
	}

	setActive(menu: string):void{
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		for (const [key, _] of Object.entries(this.state.menu))
		{
			this.state.menu[key] = false;
		}
		this.state.menu[menu] = true
		this.setState(this.state)
	}

	render(): ReactNode {
		return(
			<>
			<div className={style.Game}>
				<div className={style.interface}>
					
					<Resources/>

					<Collect metaData={this.gameData.metaData}/>

					<nav className={style.main + ' ' + stylePublic.decor}>
						<button className={style.home + ' ' + (this.state.menu.home ? style.active : '')} 		onClick={()=>this.setActive('home')}></button>
						<button className={style.shop + ' ' + (this.state.menu.shop ? style.active : '')} 		onClick={()=>this.setActive('shop')}></button>
						<button className={style.friends + ' ' + (this.state.menu.friends ? style.active : '')}	onClick={()=>this.setActive('friends')}></button>
						<button className={style.map + ' ' + (this.state.menu.worldMap ? style.active : '')} 		onClick={()=>this.setActive('worldMap')}></button>
					</nav>

					<OilPumps/>
					
					{/*{this.state.menu.buyMoney ? <ShopBox insideList={<Shop activePump={0} shopList={{}}/>}/> : ''}*/}
					{/*{this.state.menu.buyDiamonds ? <ShopBox insideList={<Shop activePump={0} shopList={{}}/>}/> : ''}*/}
					{/*{this.state.menu.home ? <ShopBox insideList={<Shop activePump={0} shopList={{}}/>}/> : ''}*/}
					{/*{this.state.menu.shop ? <ShopBox insideList={<Shop activePump={0} shopList={{}}/>}/> : ''}*/}
					{this.state.menu.friends ? <ShopBox insideList={<Friends />} onClick={function (): void {}}/> : ''}
					{/*{this.state.menu.worldMap ? <WorldMap/> : ''}*/}

				</div>
			</div>
			</>)
	}
}