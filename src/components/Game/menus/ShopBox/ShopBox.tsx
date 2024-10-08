import style from './ShopBox.module.css';
import { Component, ReactNode } from 'react';
import type * as Ifc from "./ShopBox.ifc.d.ts"

export default class ShopBox extends Component
{
	props: Ifc.Iprops;
	constructor(props: Ifc.Iprops) {
		super(props)
		this.props = props;
	}

	render(): ReactNode {
			return(
			<div className={style.closingButton} onClick={()=>{this.props.onClick()}}>
				<div className={style.menuBg} onClick={(e)=>{e.stopPropagation()}}>
					<div className={style.menu}>
					{this.props.insideList}
					</div>
				</div>
			</div>
			)
		}

}