'use client'
import cn from 'clsx'
import { Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { MENU } from './Sidebar.data'
import styles from './Sidebar.module.scss'
import { useRequireAuth } from '@/hooks/useRequireAuth'

interface SidebarProps {
	blockedPages: string[]
}

export function Sidebar({ blockedPages }: SidebarProps) {
	const pathName = usePathname()

	const { user, loading } = useRequireAuth(false)
	if (loading || !user) return null

	if (blockedPages.includes(pathName)) {
		return null
	}

	return (
		<aside className={styles.sidebar}>
			<Image src={'/assets/img/general/logo.svg'} priority width={50} height={50} alt='' />
			<div className={styles.menu}>
				{MENU.map((item) => (
					<Link
						key={item.url}
						href={`${item.url}`}
						className={cn({
							[styles.active]: pathName === item.url
						})}
					>
						<item.icon size={30} />
					</Link>
				))}
			</div>
			<Link href='/changemode'>
				<Sun size={30} />
			</Link>
		</aside>
	)
}
