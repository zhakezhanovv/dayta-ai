import { type ScoreModel, type UserModel } from '@/shared/api'

import { type Score } from './model'

/*
Custom sorting function for scores. It is used as viewmodel. It sorts out alphabetically by name and then by course order.
*/

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

	return [...scores].sort((a, b) => compareScores({ a, b, courseOrder }))
}

export function compareScores(args: { a: Score; b: Score; courseOrder: string[] }) {
	const { a, b, courseOrder } = args

	const compareResult = a.name.localeCompare(b.name)
	if (compareResult !== 0) return compareResult

	const aCourseIndex = courseOrder.findIndex((course) => a.course === course)
	const bCourseIndex = courseOrder.findIndex((course) => b.course === course)
	if (aCourseIndex > bCourseIndex) return 1
	if (aCourseIndex < bCourseIndex) return -1
	return 0
}
