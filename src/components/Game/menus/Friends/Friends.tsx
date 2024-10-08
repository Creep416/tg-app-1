import React from 'react'
import style from './Friends.module.css'
import stylePub from './../../../../StylePublic.module.css'

export default class Friends extends React.Component{
	state: IFriendsState;

	constructor(props: IFriendsProps)
	{
		super(props)
		this.state = {friendsList: props.friendsList}
	}

	render(): React.ReactNode {
	    return(<div className={style.Friends + ' ' + stylePub.menu}>
	    	
	    </div>)
	}
}