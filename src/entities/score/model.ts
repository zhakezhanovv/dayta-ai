import { scoreApi, type ScoreModel, userApi, type UserModel } from '@/shared/api'
import { useEffect, useState } from 'react'

import * as utils from './utils'

export type Score = ScoreModel & UserModel

export function useScoresFetch() {
	const [scores, setScores] = useState<Score[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	async function getScores() {
		setLoading(true)
		const users: UserModel[] = await userApi.getUsers()
		const scores: ScoreModel[] = await scoreApi.getScores()

		const resultScores = utils.getScores({ scores, users })
		const sortScores = utils.sortScores({ scores: resultScores, courseOrder: ['MATHS', 'BIO', 'CHEM'] })
		setLoading(false)
		setScores(sortScores)
	}

	useEffect(() => {
		getScores()
	}, [])

	return { scores, loading, setScores }
}
