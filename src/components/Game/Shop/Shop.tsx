import React from 'react';
import style from './Shop.module.css';

export default class Shop extends React.Component {

	constructor(props: Readonly<{shopList: {[key: string] : boolean}}>) {
		super(props)
		this.state = {}
	}

	render(): React.ReactNode {
		let goodsList: React.ReactNode[] = []
		for (let i = 0; i < 8; i++)
		{
			goodsList.push(
				<div className={style.element}>
					
				</div>
				)
		}

		return(<div className={style.Shop}>
			<div className={style.shopList}>
				{goodsList}
			</div>
			</div>)
	}
}