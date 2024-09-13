import { useAuth } from '@/context/AuthContext'
import { User } from '@nextui-org/react'
import { Check, CheckCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
const currentUser = {
	image: {
		src: 'https://placebeard.it/248/248',
		width: 100,
		height: 200
	},
	name: 'Carter Domonaui',
	desc: 'Hello how are you?'
}

export function ChatItem() {
	return (
		<Link
			href='/chat'
			className={`flex items-center gap-16 p-layout border-b border-white/10 transition-all hover:bg-white/5 cursor-pointer`}
		>
			<User
				name={currentUser?.name}
				description={currentUser.desc}
				avatarProps={{
					src: currentUser.image.src,
					size: 'lg'
				}}
				classNames={{
					name: 'text-18 font-medium',
					description: 'font-light opacity-60',
					base: 'gap-16',
					wrapper: 'gap-4'
				}}
			/>
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
