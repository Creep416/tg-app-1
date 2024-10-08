import React from 'react';
import style from './Resources.module.css';

export default class Game extends React.Component {
  parentSetState: (menu:string) => never;
	
	constructor(props: {parentSetState: (menu:string) => never}) {
			super(props)
			this.parentSetState = props.parentSetState;
	}

	render():React.ReactNode{
		return(
			<div className={style.resources}>
				<div className={style.oil}>
					<div className={style.amount}>100</div>
					<img className={style.icon} src='/Game/buttons/oil.png'/>
					<button className={style.buy} onClick={()=>{alert('Активно окно покупки'); this.parentSetState('buyOil')}}></button>
				</div>
				<div className={style.money}>
					<div className={style.amount}></div>
					<img className={style.icon} src='/Game/buttons/coin.png'/>
					<button className={style.buy} onClick={()=>{alert('Активно окно покупки'); this.parentSetState('buyMoney')}}></button>
				</div>
				<div className={style.diamonds}>
					<div className={style.amount}></div>
					<img className={style.icon} src='/Game/buttons/diamond.png'/>
					<button className={style.buy} onClick={()=>{alert('Активно окно покупки'); this.parentSetState('buyDiamonds')}}></button>
				</div>
			</div>
			)

	}
}