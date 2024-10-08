import { Component, Context, ReactNode, createContext } from 'react';
import * as metaData from "./json/metaGame.json"; 
import './App.css';

// import locs from './json/locs.json';
// import metaData from './json/metaGame.json';

import Game from './components/Game/Game.tsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;
declare const context: React.ContextType<typeof AppContext>;

interface AppContextData {
	value: string;
	setValue: (value: string) => void;
}

const AppContext = createContext<AppContextData | null>(null)

export default class App extends Component {
	state: {gameData?: IgameData}
	static contextType = AppContext;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	TWA: any;
	gameData: IgameData;


	constructor (props: object) {
		super(props)
		this.state = {}
		this.TWA = window.Telegram.WebApp;
		this.gameData = {metaData: metaData}
		this.context = createContext({})
	}

	componentDidMount()
	{
		this.context = this.gameData
		console.log(this.context)
		this.cloudWorker()
	}

	// Запрашивает данные с сервера.
	// При ошибке подгрузки данных выводит ошибку.
	// При пустых данных забивает новые. Сохраняет данные в this.state.gameData
	cloudWorker(): void
	{
		this.TWA.CloudStorage.getItem('cloudData', (error: object, value: string) => {
			if (error)
				alert(error)
			else {
				// В случае первого запуска
				if (value === undefined || value == ''){
					// Инициализация начальных данных
					this.gameData.cloudData = {
						'updateDate': new Date(),
						'name': 'noname',
						'resources': {
							'oil': 0,
							'coins': 0,
							'diamonds': 0,
							'extractionSpeed': 0,
						},
						'progression':
						{
							'mapReveal': {},
							'pumpLevels': [0, 0, 0, 0]
						}
					}
					this.TWA.CloudStorage.setItem('cloudData', JSON.stringify(this.gameData.cloudData))
				} else {
					this.gameData.cloudData = JSON.parse(value)
				}
				this.render()
				this.TWA.ready()
			}
		})
	}


	render(): ReactNode {
		const value = this.context!.value;
		console.log(value)
		window.Telegram.WebApp.expand()
		return (
		<>
			<Game gameData = {this.gameData}/>
		</>
	)
	}
}