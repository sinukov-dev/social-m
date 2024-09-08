import { Loader2 } from 'lucide-react'

import styles from './loader.module.scss'

export function Loader() {
	return (
		<div className={styles.loader}>
			<Loader2 size={50} />
		</div>
	)
}
