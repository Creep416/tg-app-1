import React from 'react';
import style from './Shop.module.css';
// declare const window: any;

type Props = {
	activePump: number;
	shopList: {[key: string] : number}
}

export default class Shop extends React.Component {
	declare props: Props;
	constructor(props: Props) {
		super(props)
		this.state = {}
	}


	render(): React.ReactNode {
		const button = (level: number) => {
			switch (this.props.shopList[this.props.activePump]){
			case 0:
				return <button className={style.buy}>купить</button>
			case level:
				return <button className={style.sell}>продать</button>
			default:
				return <button className={style.inactive}>-</button>
			}
		}

		const goodsList: React.ReactNode[] = []
		for (let i = 1; i < 5; i++)
		{
			goodsList.push(
				<div className={style.element} key={i}>
					<div className={style.img} style={{
						backgroundImage: 'url(/OilPumps/lvl_'+i+'.png), linear-gradient(45deg, #e4ac71 0%, #edc882 50%, #e4ac71 100%)'
					}}/>
					<div className={style.description}>
						<div className={style.text}>Описание и характеристики</div>
						{button(i)}
					</div>
				</div>
				)
		}

		return(
				<div className={style.Shop}>
					{goodsList}
				</div>
				)
	}
}