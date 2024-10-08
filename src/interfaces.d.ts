interface IgameData {
		metaData: ImetaData,
		cloudData?: IcloudData,
		playerData?: object,
}

interface ImetaData {
	prices: {
		oilPumps: number[],
	},
	productivity: number[]
}

interface IcloudData {
	updateDate: Date,
	name: string,
	resources:
	{
		oil: number,
		coins: number,
		diamonds: number,
		extractionSpeed: number,
	}
	progression:
	{
		mapReveal: object,
		pumpLevels: number[]
	}
}
