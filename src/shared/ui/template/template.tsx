import { cn } from '@/shared/utils'
import { type ReactNode } from 'react'

import styles from './styles.module.scss'

interface TemplateProps {
	Page: typeof Page
	Header: typeof Header
	Main: typeof Main
	Section: typeof Section
	Container: typeof Container
	Footer: typeof Footer
}

interface Props {
	children: ReactNode
	className?: string
}

function Page(props: Props) {
	const { children, className } = props
	return <div className={cn(styles.page, className)}>{children}</div>
}

function Header(props: Props) {
	const { children, className } = props
	return <header className={cn(styles.header, className)}>{children}</header>
}

function Main(props: Props) {
	const { children, className } = props
	return <main className={cn(styles.main, className)}>{children}</main>
}

function Section(props: Props) {
	const { children, className } = props
	return <section className={cn(styles.section, className)}>{children}</section>
}

function Container(props: Props) {
	const { children, className } = props
	return <div className={cn(styles.container, className)}>{children}</div>
}

function Footer(props: Props) {
	const { children, className } = props
	return <footer className={cn(styles.footer, className)}>{children}</footer>
}

export const Template: TemplateProps = {
	Page,
	Header,
	Main,
	Section,
	Container,
	Footer,
}
