import { type ScoreModel, type UserModel } from '@/shared/api'

import { type Score } from './model'

export function getScores(args: { users: UserModel[]; scores: ScoreModel[] }): Score[] {
	const { users, scores } = args
	const resultScores: Score[] = scores.map((score) => {
		const user = users.find((user) => user.id === score.userId)!
		return { ...score, name: user.name, email: user.email }
	})

	return resultScores
}

export function sortScores(args: { scores: Score[]; courseOrder: string[] }): Score[] {
	const { scores, courseOrder } = args

	return [...scores].sort((a, b) => {
		const compareResult = a.name.localeCompare(b.name)
		if (compareResult !== 0) return compareResult

		const aCourseIndex = courseOrder.findIndex((course) => a.course === course)
		const bCourseIndex = courseOrder.findIndex((course) => b.course === course)
		if (aCourseIndex > bCourseIndex) return 1
		if (aCourseIndex < bCourseIndex) return -1
		return 0
	})
}

/**
#1
[
	{
		name: string
		course: string
		score: number
	}
].sort().sort()

#2
[
	{
		name: string
		scores: [
			{
				score: number
				course: string
			}
		]
	}
].sort().forEach(user => user.scores.sort())
 */
