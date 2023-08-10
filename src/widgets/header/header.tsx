import { Template } from '@/shared/ui'

import styles from './styles.module.scss'

export function Header() {
	return (
		<Template.Header className={styles.header}>
			<div className={styles.header__logo}>Table</div>
		</Template.Header>
	)
}
