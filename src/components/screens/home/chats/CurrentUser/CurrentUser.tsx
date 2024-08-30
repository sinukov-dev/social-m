import Image from 'next/image'
import styles from './Chats.module.scss'
import { MoreHorizontal } from 'lucide-react'

const currentUser = {
	image: {
		src: 'https://placebeard.it/250/250',
		width: 100,
		height: 200,
	},
	name: 'Carter Domonaui',
	desc: 'Frontend developer',
}
export function CurrentUser() {
	return (
		<div className={`p-layout border-b border-white/10 flex items-center justify-between`}>
			<div className={`flex items-center gap-16`}>
				<div className={`relative`}>
					<div className={`w-56 h-56 overflow-hidden rounded-full`}>
						<Image
							src={`${currentUser.image.src}`}
							alt={'Image'}
							width={currentUser.image.width}
							height={currentUser.image.height}
						/>
					</div>
					<div
						className={`online-checker bg-green-600 w-16 h-16 rounded-5 border-3 border-black absolute bottom-0 right-0`}
					></div>
				</div>
				<div>
					{/* <div className={`text-16 text-bold text-white`}>{name}</div> */}
					{/* <div className={`text-14 text-normal text-g1000`}>{currentUser.desc}</div> */}
				</div>
			</div>
			<div className={`py-16`}>
				<MoreHorizontal />
			</div>
		</div>
	)
}
