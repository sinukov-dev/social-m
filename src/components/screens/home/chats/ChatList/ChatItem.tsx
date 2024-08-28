import { Check, CheckCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
const currentUser = {
	image: {
		src: 'https://placebeard.it/248/248',
		width: 100,
		height: 200,
	},
	name: 'Carter Domonaui',
	desc: 'Hello how are you?',
}

export function ChatItem() {
	return (
		<Link
			href='/chat'
			className={`flex items-center gap-16 p-layout border-b border-white/10 transition-all hover:bg-white/5 cursor-pointer`}
		>
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
				<div className={`text-16 text-bold text-white`}>{currentUser.name}</div>
				<div className={`text-14 text-normal text-g1000`}>{currentUser.desc}</div>
			</div>
			<div className={`ml-auto flex flex-col items-center gap-4`}>
				<div className={`text-14 text-g700`}>9:53</div>
				{/* <div className={`w-20 h-20 flex items-center justify-center rounded-6 text-12 text-white bg-purple-500`}>3</div> */}
				<div>
					{/* <Check size={16} /> */}
					<div className={`text-green-400`}>
						<CheckCheck size={16} />
					</div>
				</div>
			</div>
		</Link>
	)
}
