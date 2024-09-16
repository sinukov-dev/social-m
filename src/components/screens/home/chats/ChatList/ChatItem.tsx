import { useAuth } from '@/context/AuthContext'
import { User } from '@nextui-org/react'
import { Check, CheckCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
type TUser = {
	userName: string
	lastMessage: {
		text: string
		time: string
	}
	avatarSrc: string
	messagesQ: string
	sendStatus: string
}
type ChatItemProps = {
	data: TUser
}
export function ChatItem({ data }: ChatItemProps) {
	console.log(data)
	return (
		<Link
			href='/chat'
			className={`flex items-center gap-16 p-layout border-b border-white/10 transition-all hover:bg-white/5 cursor-pointer`}
		>
			<User
				name={data.userName}
				description={data.lastMessage.text}
				avatarProps={{
					src: data.avatarSrc,
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
				<div className={`text-14 text-g700`}>{data.lastMessage.time}</div>
				<div
					className={`w-20 h-20 flex items-center justify-center rounded-6 text-12 text-white bg-purple-500`}
				>
					{data.messagesQ}
				</div>
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
