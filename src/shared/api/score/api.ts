import { baseInstance } from '../base'
import { type ScoreModel } from './types'

class ScoreApi {
	public async getScores(args: void): Promise<ScoreModel[]> {
		const req = await baseInstance.get('/scores')
		return req.data
	}
}

export const scoreApi = new ScoreApi()
