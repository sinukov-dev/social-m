import type { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import { Sidebar } from './sidebar/Sidebar'

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
	return (
		<main className={`${styles.layout} `}>
			<Sidebar blockedPages={['/login', '/signup']} />
			<section>{children}</section>
		</main>
	)
}
