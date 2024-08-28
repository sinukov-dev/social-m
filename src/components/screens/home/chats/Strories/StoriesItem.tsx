import Image from 'next/image'
import styles from './Stories.module.scss'

export function StoriesItem() {
	return (
		<div className={`${styles.item} flex flex-col gap-12  min-w-80`}>
			<div className={`border-2 rounded-full border-g900 w-72 h-72 text-g700 flex items-stretch justify-stretch`}>
				<div className={`m-[3px] rounded-full overflow-hidden`}>
					<Image
						className={`object-cover w-full h-full`}
						src={`https://placebeard.it/249/249`}
						alt={'Image'}
						width={100}
						height={100}
					/>
				</div>
			</div>
			<div className={`text-16 text-white`}>john weak</div>
		</div>
	)
}
