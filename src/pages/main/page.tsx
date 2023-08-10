import { scoreModel } from '@/entities/score'
import { Table, Template } from '@/shared/ui'
import { usePageTitle } from '@/shared/utils'
import { Header } from '@/widgets/header'

import styles from './styles.module.scss'

export function MainPage() {
	usePageTitle('Main')
	const { scores, loading } = scoreModel.useScoresFetch()

	return (
		<Template.Page>
			<Header />
			<Template.Main>
				<Template.Section className={styles.score__section}>
					<Template.Container>
						<Table className={styles.score__table}>
							<Table.Head>
								<Table.Tr className={styles.score__head}>
									<Table.Th>Name</Table.Th>
									<Table.Th>Course</Table.Th>
									<Table.Th>Score</Table.Th>
								</Table.Tr>
							</Table.Head>
							<Table.Body loading={loading}>
								{scores.map((score, index) => (
									<Table.Tr key={index} className={styles.score__body}>
										<Table.Td>{score.name}</Table.Td>
										<Table.Td>{score.course}</Table.Td>
										<Table.Td>{score.score}</Table.Td>
									</Table.Tr>
								))}
							</Table.Body>
						</Table>
					</Template.Container>
				</Template.Section>
			</Template.Main>
		</Template.Page>
	)
}
