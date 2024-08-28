import { Plus } from 'lucide-react'
import styles from './Stories.module.scss'
import { StoriesItem } from './StoriesItem'

export function Stories() {
	return (
		<div className={`border-b border-white/10 dynamic-grid p-layout`}>
			<div className={`flex items-start gap-20 overflow-visible`}>
				<div className={`${styles.item} ${styles.item_self}  flex flex-col gap-12 min-w-80`}>
					<div
						className={`rounded-full border-2 border-g900 w-72 h-72 border-dashed text-g700 flex items-center justify-center`}
					>
						<Plus size={30} />
					</div>
					<div className={`text-16 text-white`}>My story</div>
				</div>
				<StoriesItem />
				<StoriesItem />
				<StoriesItem />
				<StoriesItem />
				<StoriesItem />
				<StoriesItem />
			</div>
		</div>
	)
}
