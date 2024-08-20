import React from 'react'
import style from './Friends.module.css'
import stylePub from './../../StylePublic.module.css'

export default class Friends extends React.Component{
	friendsList: object;
	
	constructor(props:object)
	{
		super(props)
		this.friendsList = {}
	}

	render(): React.ReactNode {
	    return(<div className={style.Friends + ' ' + stylePub.menu}>
	    	
	    </div>)
	}
}