import React from 'react';
import style from './Shop.module.css';
import stylePub from './../../StylePublic.module.css'
declare const window: any;

export default class Shop extends React.Component {

	constructor(props: Readonly<{shopList: {[key: string] : boolean}}>) {
		super(props)
		this.state = {}
	}

	render(): React.ReactNode {
		// const screenData = (String(window.screen.width)+':'+String(window.screen.height)+'|'+String(window.screen.availWidth)+':'+String(window.screen.availHeight))
		let goodsList: React.ReactNode[] = []
		for (let i = 0; i < 1; i++)
		{
			goodsList.push(
				<div className={style.element} key={i}>
					<div className={style.img}/>
					<div className={style.description}>
						<div className={style.text}>Описание и характеристики</div>
						<button className={style.buy}></button>
					</div>
				</div>
				)
		}

		return(<div className={stylePub.menu}>
			<div className={style.shopList}>
				{goodsList}
			</div>
			</div>)
	}
}