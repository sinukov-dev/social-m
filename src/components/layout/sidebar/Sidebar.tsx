'use client'
import cn from 'clsx'
import { Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MENU } from './Sidebar.data'
import styles from './Sidebar.module.scss'

export function Sidebar() {
	const pathName = usePathname()
	return (
		<aside className={styles.sidebar}>
			<Image
				src={'/assets/img/general/logo.svg'}
				priority
				width={50}
				height={50}
				alt=''
			/>
			<div className={styles.menu}>
				{MENU.map(item => (
					<Link
						key={item.url}
						href={`${item.url}`}
						className={cn({
							[styles.active]: pathName === item.url,
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
