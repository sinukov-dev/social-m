import { MessageSquare, Phone, Settings, Sun, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Sidebar.module.scss'

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<Image src={'/assets/logo.svg'} priority width={50} height={50} alt='' />
			<div className={styles.menu}>
				<Link href='/users'>
					<Users size={30} />
				</Link>
				<Link href='/calls'>
					<Phone size={30} />
				</Link>
				<Link href='/messages'>
					<MessageSquare size={30} />
				</Link>
				<Link href='/Settings'>
					<Settings size={30} />
				</Link>
			</div>
			<Link href='/changemode'>
				<Sun size={30} />
			</Link>
		</aside>
	)
}
