import { cn } from '@/shared/utils'
import { type ReactNode } from 'react'

import { Spinner } from '../spinner'
import styles from './styles.module.scss'

type TableColor = 'white' | 'black'

interface Props {
	children: ReactNode
	className?: string
}

function Table(props: Props & { color?: TableColor }) {
	const { children, className, color = 'black' } = props
	return (
		<table className={cn(styles.table, className)} data-color={color}>
			{children}
		</table>
	)
}

function Head(props: Props) {
	const { children, className } = props
	return <thead className={cn(styles.table__head, className)}>{children}</thead>
}

function Body(props: Props & { loading: boolean }) {
	const { children, className, loading } = props
	return (
		<tbody className={cn(styles.table__body, className)} data-loading={loading}>
			<div className={styles.loading}>
				<Spinner />
			</div>
			{children}
		</tbody>
	)
}

function Tr(props: Props) {
	const { children, className } = props
	return <tr className={cn(styles.table__tr, className)}>{children}</tr>
}

function Th(props: Props) {
	const { children, className } = props
	return <th className={cn(styles.table__th, className)}>{children}</th>
}

function Td(props: Props) {
	const { children, className } = props
	return <td className={cn(styles.table__td, className)}>{children}</td>
}

Table.Head = Head
Table.Body = Body
Table.Tr = Tr
Table.Th = Th
Table.Td = Td

export { Table }
